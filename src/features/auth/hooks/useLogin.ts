import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api/auth-api';
import { finalizeAuth } from '@/lib/auth-redirect';

export function useLogin() {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: () => {
      finalizeAuth();
    },
  });
}