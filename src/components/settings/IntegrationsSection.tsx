import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { CanvasGuide } from './CanvasGuide';
import { useCanvas } from '../../hooks/useCanvas';

interface IntegrationsSectionProps {
  canvasUrl: string;
  canvasApiKey: string;
  isGoogleConnected: boolean;
  onCanvasUrlChange: (url: string) => void;
  onCanvasApiKeyChange: (key: string) => void;
  onConnectGoogle: () => void;
}

export function IntegrationsSection({
  canvasUrl,
  canvasApiKey,
  isGoogleConnected,
  onCanvasUrlChange,
  onCanvasApiKeyChange,
  onConnectGoogle,
}: IntegrationsSectionProps) {
  const [showGuide, setShowGuide] = useState(false);
  const { connect, disconnect, isConnecting, isConnected, error } = useCanvas();

  // Set default Canvas URL for MSJC
  useEffect(() => {
    if (!canvasUrl) {
      onCanvasUrlChange('https://msjc.instructure.com');
    }
  }, [canvasUrl, onCanvasUrlChange]);

  const handleConnectCanvas = async () => {
    const success = await connect({
      apiUrl: canvasUrl,
      apiKey: canvasApiKey,
    });

    if (success) {
      // Clear sensitive data from form after successful connection
      onCanvasApiKeyChange('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Canvas Integration */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Canvas Integration</h3>
          <div className="space-y-4">
            {!isConnected ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Canvas URL</label>
                  <input
                    type="url"
                    value={canvasUrl}
                    onChange={(e) => onCanvasUrlChange(e.target.value)}
                    placeholder="https://canvas.institution.edu"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">API Key</label>
                  <input
                    type="password"
                    value={canvasApiKey}
                    onChange={(e) => onCanvasApiKeyChange(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    onClick={() => setShowGuide(!showGuide)}
                    className="mt-1 text-sm text-violet-600 hover:text-violet-700"
                  >
                    {showGuide ? 'Hide guide' : 'How to get API key?'}
                  </button>
                </div>

                {showGuide && <CanvasGuide />}

                {error && (
                  <div className="flex items-center space-x-2 text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                <Button
                  onClick={handleConnectCanvas}
                  disabled={isConnecting || !canvasUrl || !canvasApiKey}
                >
                  {isConnecting ? 'Connecting...' : 'Connect Canvas'}
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <p className="text-green-600">✓ Connected to Canvas</p>
                <Button variant="outline" onClick={disconnect}>
                  Disconnect Canvas
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Google Integration */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Google Calendar</h3>
          <Button
            onClick={onConnectGoogle}
            disabled={isGoogleConnected}
          >
            {isGoogleConnected ? 'Connected' : 'Connect Google Calendar'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}