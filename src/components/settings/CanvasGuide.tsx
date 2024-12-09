import React from 'react';
import { HelpCircle } from 'lucide-react';

export function CanvasGuide() {
  return (
    <div className="mt-4 p-4 bg-violet-50 rounded-lg">
      <div className="flex items-start space-x-2">
        <HelpCircle className="w-5 h-5 text-violet-600 mt-0.5" />
        <div>
          <h4 className="font-medium text-violet-900">How to obtain your Canvas API Key:</h4>
          <ol className="mt-2 space-y-2 text-sm text-violet-800">
            <li>1. Log into your Canvas account</li>
            <li>2. Click on "Account" in the main menu</li>
            <li>3. Go to "Settings"</li>
            <li>4. Scroll to "Approved Integrations"</li>
            <li>5. Click "New Access Token"</li>
            <li>6. Enter "CourseFlow Integration" as the token name</li>
            <li>7. Copy the generated token and paste it above</li>
          </ol>
          <p className="mt-2 text-sm text-violet-900">
            Note: Keep your API key secure and never share it with others.
          </p>
        </div>
      </div>
    </div>
  );
}