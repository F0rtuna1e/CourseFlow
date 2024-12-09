import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProfileSection } from '../components/settings/ProfileSection';
import { PreferencesSection } from '../components/settings/PreferencesSection';
import { DangerZone } from '../components/settings/DangerZone';

interface UserSettings {
  email: string;
  language: string;
  notifications: {
    assignments: boolean;
    grades: boolean;
    reminders: boolean;
  };
}

export function Settings() {
  // In a real app, this would be fetched from your authentication context
  const userEmail = "user@example.com"; // Replace this with actual user email from auth

  const [settings, setSettings] = useState<UserSettings>({
    email: userEmail,
    language: 'en',
    notifications: {
      assignments: true,
      grades: true,
      reminders: true,
    },
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSettingChange = (key: keyof UserSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleNotificationChange = (key: keyof typeof settings.notifications) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key],
      },
    }));
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('Settings saved successfully!');
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Account deleted successfully');
    }
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <ProfileSection
        email={settings.email}
        onEmailChange={(email) => handleSettingChange('email', email)}
      />

      <PreferencesSection
        language={settings.language}
        notifications={settings.notifications}
        onLanguageChange={(language) => handleSettingChange('language', language)}
        onNotificationChange={handleNotificationChange}
      />

      <DangerZone onDeleteAccount={handleDeleteAccount} />

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSaveSettings} disabled={isSaving}>
          {isSaving ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            'Save Changes'
          )}
        </Button>
      </div>
    </div>
  );
}