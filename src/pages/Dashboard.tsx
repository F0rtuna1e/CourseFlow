import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Brain, 
  BookOpen, 
  LogOut,
  Settings,
  RefreshCw
} from 'lucide-react';

// Mock data for the dashboard
const mockAssignments = [
  { id: 1, subject: 'Mathematics', title: 'Calculus Quiz', dueDate: '2024-03-20', status: 'pending' },
  { id: 2, subject: 'Physics', title: 'Lab Report', dueDate: '2024-03-22', status: 'pending' },
  { id: 3, subject: 'Computer Science', title: 'Programming Project', dueDate: '2024-03-25', status: 'pending' }
];

const mockGrades = {
  Mathematics: 92,
  Physics: 88,
  'Computer Science': 95,
  Chemistry: 87,
  English: 90
};

export function Dashboard() {
  const [userName] = useState('John');
  const [syncStatus, setSyncStatus] = useState({ canvas: false, google: false });

  const handleSync = (service: 'canvas' | 'google') => {
    setSyncStatus(prev => ({ ...prev, [service]: true }));
    setTimeout(() => {
      setSyncStatus(prev => ({ ...prev, [service]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">CourseFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800">
                <Settings className="h-6 w-6" />
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 bg-violet-100 p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-indigo-900">Welcome back, {userName}!</h1>
          <p className="text-indigo-700">Here's an overview of your academic progress</p>
        </div>

        {/* Sync Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => handleSync('canvas')}
            className="flex items-center justify-center space-x-2 bg-violet-100 p-4 rounded-lg shadow-sm hover:bg-violet-200 transition-colors"
          >
            <RefreshCw className={`h-5 w-5 ${syncStatus.canvas ? 'animate-spin text-indigo-600' : 'text-indigo-600'}`} />
            <span className="text-indigo-700">Sync with Canvas</span>
          </button>
          <button
            onClick={() => handleSync('google')}
            className="flex items-center justify-center space-x-2 bg-violet-100 p-4 rounded-lg shadow-sm hover:bg-violet-200 transition-colors"
          >
            <RefreshCw className={`h-5 w-5 ${syncStatus.google ? 'animate-spin text-indigo-600' : 'text-indigo-600'}`} />
            <span className="text-indigo-700">Sync with Google</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Grades Overview */}
          <div className="col-span-2 bg-violet-100 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-indigo-900">Grades Overview</h2>
              <BarChart3 className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="space-y-4">
              {Object.entries(mockGrades).map(([subject, grade]) => (
                <div key={subject} className="relative pt-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-indigo-900">{subject}</span>
                    <span className="text-sm font-medium text-indigo-900">{grade}%</span>
                  </div>
                  <div className="overflow-hidden h-2 bg-violet-200 rounded">
                    <div
                      style={{ width: `${grade}%` }}
                      className="h-full bg-indigo-600 rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Assistants */}
          <div className="space-y-4">
            <div className="bg-violet-100 rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-indigo-900 mb-4">AI Assistants</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center space-x-3 text-left p-3 rounded-lg bg-violet-50 hover:bg-violet-200 transition-colors">
                  <Brain className="h-5 w-5 text-indigo-600" />
                  <span className="text-indigo-900">AI Grade Insights</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-left p-3 rounded-lg bg-violet-50 hover:bg-violet-200 transition-colors">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                  <span className="text-indigo-900">AI Homework Help</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-left p-3 rounded-lg bg-violet-50 hover:bg-violet-200 transition-colors">
                  <Brain className="h-5 w-5 text-indigo-600" />
                  <span className="text-indigo-900">AI Study Buddy</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="mt-8 bg-violet-100 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-indigo-900">Upcoming Assignments</h2>
            <Calendar className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full divide-y divide-violet-200">
              <thead className="bg-violet-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Assignment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-violet-50 divide-y divide-violet-200">
                {mockAssignments.map((assignment) => (
                  <tr key={assignment.id} className="hover:bg-violet-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">{assignment.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">{assignment.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-900">{assignment.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {assignment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}