// Add your types here as you build
export interface User {
  id: string;
  name: string;
  email: string;
}

// Example API response type
export interface ApiResponse<T> {
  data: T;
  error?: string;
}
