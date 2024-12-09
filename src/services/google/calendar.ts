import { GOOGLE_CONFIG } from '../../config/google';
import type { Event } from '../../types/calendar';

declare global {
  interface Window {
    gapi: typeof gapi;
    google: typeof google;
  }
}

export class GoogleCalendarService {
  private static instance: GoogleCalendarService;
  private gapiInitialized: boolean = false;
  private tokenClient: google.accounts.oauth2.TokenClient | null = null;

  private constructor() {}

  static getInstance(): GoogleCalendarService {
    if (!GoogleCalendarService.instance) {
      GoogleCalendarService.instance = new GoogleCalendarService();
    }
    return GoogleCalendarService.instance;
  }

  async initialize(): Promise<void> {
    if (this.gapiInitialized) return;

    try {
      await new Promise<void>((resolve, reject) => {
        window.gapi.load('client', async () => {
          try {
            await window.gapi.client.init({
              apiKey: GOOGLE_CONFIG.API_KEY,
              discoveryDocs: [GOOGLE_CONFIG.DISCOVERY_DOC],
            });
            resolve();
          } catch (error) {
            console.error('Error initializing GAPI client:', error);
            reject(error);
          }
        });
      });

      this.tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CONFIG.CLIENT_ID,
        scope: GOOGLE_CONFIG.SCOPES,
        callback: '', // Will be set during authorization
      });

      this.gapiInitialized = true;
    } catch (error) {
      console.error('Failed to initialize Google Calendar service:', error);
      throw error;
    }
  }

  async authorize(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.tokenClient) {
        reject(new Error('Token client not initialized'));
        return;
      }

      this.tokenClient.callback = async (resp) => {
        if (resp.error) {
          reject(resp);
          return;
        }
        resolve();
      };

      if (window.gapi.client.getToken() === null) {
        this.tokenClient.requestAccessToken({ prompt: 'consent' });
      } else {
        this.tokenClient.requestAccessToken({ prompt: '' });
      }
    });
  }

  async syncEvents(events: Event[]): Promise<void> {
    try {
      await this.initialize();
      await this.authorize();

      const batch = window.gapi.client.newBatch();

      for (const event of events) {
        const googleEvent = {
          summary: event.title,
          start: {
            date: event.start.split('T')[0],
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
          end: {
            date: event.end.split('T')[0],
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
          description: `CourseFlow Event - ${event.extendedProps.type}\nCourse: ${event.extendedProps.course}${
            event.extendedProps.description ? '\nDescription: ' + event.extendedProps.description : ''
          }`,
          colorId: event.extendedProps.type === 'exam' ? '11' : '9', // Red for exams, blue for assignments
        };

        batch.add(
          window.gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: googleEvent,
          })
        );
      }

      await batch.execute();
    } catch (error) {
      console.error('Error syncing with Google Calendar:', error);
      throw error;
    }
  }
}