import { useState } from 'react';
import { GoogleCalendarService } from '../services/google/calendar';
import { Event } from '../types/calendar';

export function useGoogleCalendar() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const syncEvents = async (events: Event[]) => {
    setIsSyncing(true);
    setError(null);

    try {
      const service = GoogleCalendarService.getInstance();
      await service.syncEvents(events);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sync with Google Calendar');
      throw err;
    } finally {
      setIsSyncing(false);
    }
  };

  return {
    syncEvents,
    isSyncing,
    error,
  };
}