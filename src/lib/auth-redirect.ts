export interface AuthParams {
  redirectUri: string;
}

export function getAuthParams(): AuthParams {
  const params = new URLSearchParams(window.location.search);
  return {
    redirectUri: params.get('redirect_uri') || '/',
  };
}

export function finalizeAuth() {
  const { redirectUri } = getAuthParams();
  window.location.href = redirectUri;
}