import { apiClient } from '@/lib/api-client';
import { type LoginRequestDTO, type RegisterRequestDTO, type ChangePasswordRequestDTO, type AuthResponseDTO } from './dto';

export const authApi = {
  login: (data: LoginRequestDTO) =>
    apiClient<AuthResponseDTO>('/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  register: (data: RegisterRequestDTO) =>
    apiClient<AuthResponseDTO>('/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  changePassword: (data: ChangePasswordRequestDTO) =>
    apiClient<AuthResponseDTO>('/auth/change-password', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};
