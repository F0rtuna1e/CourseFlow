import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { RefreshCw, Plus, X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGoogleCalendar } from '../hooks/useGoogleCalendar';
import type { Event } from '../types/calendar';

// Mock data for courses
const mockCourses = [
  { id: 1, name: 'Mathematics', code: 'MATH101' },
  { id: 2, name: 'Physics', code: 'PHYS101' },
  { id: 3, name: 'Computer Science', code: 'CS101' },
  { id: 4, name: 'Biology', code: 'BIO101' },
  { id: 5, name: 'Chemistry', code: 'CHEM101' }
];

// Mock data for initial events
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Math Homework',
    start: '2024-03-10',
    end: '2024-03-10',
    backgroundColor: '#818cf8',
    borderColor: '#818cf8',
    extendedProps: {
      type: 'assignment',
      course: 'MATH101'
    }
  },
  {
    id: '2',
    title: 'Biology Midterm',
    start: '2024-03-15',
    end: '2024-03-15',
    backgroundColor: '#f87171',
    borderColor: '#f87171',
    extendedProps: {
      type: 'exam',
      course: 'BIO101'
    }
  },
  {
    id: '3',
    title: 'History Research Paper',
    start: '2024-03-20',
    end: '2024-03-20',
    backgroundColor: '#818cf8',
    borderColor: '#818cf8',
    extendedProps: {
      type: 'assignment',
      course: 'HIST101'
    }
  }
];

export function Calendar() {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
    type: 'assignment',
    course: '',
    description: ''
  });
  const [syncStatus, setSyncStatus] = useState({
    google: false,
    canvas: false
  });

  const { syncEvents, isSyncing, error: syncError } = useGoogleCalendar();

  const handleSync = async (service: 'google' | 'canvas') => {
    if (service === 'google') {
      try {
        setSyncStatus(prev => ({ ...prev, [service]: true }));
        await syncEvents(events);
        alert('Successfully synced with Google Calendar!');
      } catch (error) {
        console.error('Failed to sync with Google Calendar:', error);
        alert('Failed to sync with Google Calendar. Please try again.');
      } finally {
        setSyncStatus(prev => ({ ...prev, [service]: false }));
      }
    } else {
      setSyncStatus(prev => ({ ...prev, [service]: true }));
      setTimeout(() => {
        setSyncStatus(prev => ({ ...prev, [service]: false }));
        alert(`Successfully synced with Canvas`);
      }, 2000);
    }
  };

  const handleDateClick = (arg: { date: Date }) => {
    setNewEvent(prev => ({
      ...prev,
      start: arg.date,
      end: arg.date
    }));
    setShowAddModal(true);
  };

  const handleEventClick = (arg: { event: any }) => {
    setSelectedEvent({
      id: arg.event.id,
      title: arg.event.title,
      start: arg.event.startStr,
      end: arg.event.endStr,
      backgroundColor: arg.event.backgroundColor,
      borderColor: arg.event.borderColor,
      extendedProps: arg.event.extendedProps
    });
    setShowEventModal(true);
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const eventColor = newEvent.type === 'exam' ? '#f87171' : '#818cf8';

    const event: Event = {
      id: Date.now().toString(),
      title: newEvent.title,
      start: newEvent.start.toISOString().split('T')[0],
      end: newEvent.end.toISOString().split('T')[0],
      backgroundColor: eventColor,
      borderColor: eventColor,
      extendedProps: {
        type: newEvent.type,
        course: newEvent.course,
        description: newEvent.description
      }
    };

    setEvents(prev => [...prev, event]);
    setShowAddModal(false);
    setNewEvent({
      title: '',
      start: new Date(),
      end: new Date(),
      type: 'assignment',
      course: '',
      description: ''
    });
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(prev => prev.filter(event => event.id !== selectedEvent.id));
      setShowEventModal(false);
      setSelectedEvent(null);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Calendar</h1>
        
        {/* Sync Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => handleSync('google')}
            className="flex items-center px-4 py-2 bg-violet-100 dark:bg-violet-900 border border-violet-200 dark:border-violet-700 rounded-md shadow-sm text-sm font-medium text-violet-700 dark:text-violet-200 hover:bg-violet-200 dark:hover:bg-violet-800"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${syncStatus.google ? 'animate-spin' : ''}`} />
            Sync with Google Calendar
          </button>
          <button
            onClick={() => handleSync('canvas')}
            className="flex items-center px-4 py-2 bg-violet-100 dark:bg-violet-900 border border-violet-200 dark:border-violet-700 rounded-md shadow-sm text-sm font-medium text-violet-700 dark:text-violet-200 hover:bg-violet-200 dark:hover:bg-violet-800"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${syncStatus.canvas ? 'animate-spin' : ''}`} />
            Sync with Canvas
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-4 py-2 bg-violet-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-violet-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Assignment
          </button>
        </div>

        {/* Calendar Legend */}
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#818cf8] mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Assignments</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#f87171] mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Exams</span>
          </div>
        </div>
      </div>

      {/* Calendar Component */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events}
          editable={true}
          selectable={true}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
      </div>

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 overflow-y-auto z-[1000]">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Assignment</h2>
                  <button onClick={() => setShowAddModal(false)}>
                    <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                <form onSubmit={handleAddEvent}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Course</label>
                      <select
                        required
                        value={newEvent.course}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, course: e.target.value }))}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Select a course</option>
                        {mockCourses.map(course => (
                          <option key={course.id} value={course.code}>
                            {course.name} ({course.code})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assignment Title</label>
                      <input
                        type="text"
                        required
                        value={newEvent.title}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                      <select
                        value={newEvent.type}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, type: e.target.value }))}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="assignment">Assignment</option>
                        <option value="exam">Exam</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Due Date</label>
                      <DatePicker
                        selected={newEvent.start}
                        onChange={(date: Date) => setNewEvent(prev => ({
                          ...prev,
                          start: date,
                          end: date
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-gray-700 dark:text-white"
                        dateFormat="MMMM d, yyyy"
                        minDate={new Date()}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description (optional)</label>
                      <textarea
                        value={newEvent.description}
                        onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:bg-gray-700 dark:text-white"
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-violet-600 text-white rounded-md text-sm font-medium hover:bg-violet-700"
                    >
                      Add Assignment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View/Edit Event Modal */}
      {showEventModal && selectedEvent && (
        <div className="fixed inset-0 overflow-y-auto z-[1000]">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setShowEventModal(false)}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Assignment Details</h2>
                  <button onClick={() => setShowEventModal(false)}>
                    <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Course</label>
                    <p className="mt-1 text-gray-900 dark:text-white">{selectedEvent.extendedProps.course}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                    <p className="mt-1 text-gray-900 dark:text-white">{selectedEvent.title}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Due Date</label>
                    <p className="mt-1 text-gray-900 dark:text-white">
                      {new Date(selectedEvent.start).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                    <p className="mt-1 text-gray-900 dark:text-white capitalize">{selectedEvent.extendedProps.type}</p>
                  </div>
                  {selectedEvent.extendedProps.description && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                      <p className="mt-1 text-gray-900 dark:text-white">{selectedEvent.extendedProps.description}</p>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={handleDeleteEvent}
                    className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"
                  >
                    Delete Assignment
                  </button>
                  <button
                    onClick={() => setShowEventModal(false)}
                    className="px-4 py-2 bg-violet-600 text-white rounded-md text-sm font-medium hover:bg-violet-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}