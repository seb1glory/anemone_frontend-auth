const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/v1/auth';

export async function apiClient<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Internal Error on Server' }));
    throw new Error(errorData.message || `Error ${response.status}`);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}