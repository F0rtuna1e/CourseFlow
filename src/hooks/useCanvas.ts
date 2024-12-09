import { useState, useCallback, useEffect } from 'react';
import { CanvasAPI } from '../services/canvas/api';
import { CanvasConfig, CanvasConfigSchema } from '../services/canvas/types';

export function useCanvas() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  // Check for existing connection on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('canvas_config');
    if (savedConfig) {
      try {
        const config = JSON.parse(savedConfig);
        setIsConnected(true);
        // Validate the connection silently
        new CanvasAPI(config).validateConnection().catch(() => {
          setIsConnected(false);
          localStorage.removeItem('canvas_config');
        });
      } catch {
        localStorage.removeItem('canvas_config');
      }
    }
  }, []);

  const connect = useCallback(async (config: CanvasConfig) => {
    setIsConnecting(true);
    setError(null);

    try {
      // Validate config schema
      CanvasConfigSchema.parse(config);

      // Initialize API and test connection
      const api = new CanvasAPI(config);
      await api.validateConnection();

      // Store credentials securely (in a real app, this would be handled by a backend)
      localStorage.setItem('canvas_config', JSON.stringify(config));
      
      setIsConnected(true);
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to connect to Canvas';
      setError(message);
      return false;
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    localStorage.removeItem('canvas_config');
    setIsConnected(false);
    setError(null);
  }, []);

  return {
    connect,
    disconnect,
    isConnecting,
    isConnected,
    error,
  };
}