import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api/auth-api';
import { finalizeAuth } from '@/lib/auth-redirect';

export function useRegister() {
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      finalizeAuth();
    },
  });
}