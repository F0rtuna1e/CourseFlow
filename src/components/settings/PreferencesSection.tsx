import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

interface PreferencesSectionProps {
  language: string;
  notifications: Record<string, boolean>;
  onLanguageChange: (language: string) => void;
  onNotificationChange: (key: string) => void;
}

export function PreferencesSection({
  language,
  notifications,
  onLanguageChange,
  onNotificationChange,
}: PreferencesSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Language</label>
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => onNotificationChange(key)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-600">
                  {key.charAt(0).toUpperCase() + key.slice(1)} notifications
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}