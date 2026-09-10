import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Введите email').email('Некорректный формат email'),
  password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
});

export const registerSchema = z.object({
  email: z.string().min(1, 'Введите email').email('Некорректный формат email'),
  username: z.string().min(1, 'Введите username').max(12, 'Username должен быть не больше 12'),
  name: z.string().min(1, 'Введите username').max(12, 'Username должен быть не больше 12'),
  surname: z.string().min(1, 'Введите username').max(12, 'Username должен быть не больше 12'),
  password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
  confirmPassword: z.string().min(1, 'Подтвердите пароль'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword'],
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Введите текущий пароль'),
  newPassword: z.string().min(6, 'Новый пароль должен быть не менее 6 символов'),
  confirmNewPassword: z.string().min(1, 'Подтвердите новый пароль'),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: 'Новые пароли не совпадают',
  path: ['confirmNewPassword'],
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;