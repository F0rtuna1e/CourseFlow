declare namespace google.accounts.oauth2 {
  interface TokenClient {
    callback: (response: TokenResponse) => void;
    requestAccessToken: (options?: { prompt?: string }) => void;
  }

  interface TokenResponse {
    access_token: string;
    error?: string;
    expires_in: number;
    scope: string;
    token_type: string;
  }

  function initTokenClient(config: {
    client_id: string;
    scope: string;
    callback: string | ((response: TokenResponse) => void);
  }): TokenClient;
}

declare namespace gapi.client {
  function init(config: {
    apiKey: string;
    discoveryDocs: string[];
  }): Promise<void>;

  function getToken(): null | {
    access_token: string;
  };

  function newBatch(): {
    add(request: any): void;
    execute(): Promise<any>;
  };

  namespace calendar.events {
    function insert(params: {
      calendarId: string;
      resource: any;
    }): Promise<any>;
  }
}

declare namespace gapi {
  function load(
    api: string,
    callback: () => void
  ): void;
}