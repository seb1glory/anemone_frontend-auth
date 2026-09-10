import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { loginSchema, type LoginInput } from '../model/schemas';
import { useLogin } from '../hooks/useLogin';

export function LoginForm() {
  const { mutate: login, isPending, error } = useLogin();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => login(data))} className="form-container">
      <h2>Вход</h2>

      {error && <div className="error-message">{error.message}</div>}

      <div className="field">
        <label>Email</label>
        <input {...register('email')} type="email" placeholder="you@example.com" />
        {errors.email && <span className="field-error">{errors.email.message}</span>}
      </div>

      <div className="field">
        <label>Пароль</label>
        <input {...register('password')} type="password" />
        {errors.password && <span className="field-error">{errors.password.message}</span>}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? 'Вход...' : 'Войти'}
      </button>

      <div className="form-links form-links-space-between">
        <Link to="/register" className="text-link">Регистрация</Link>
        <Link to="/change-password" className="text-link">Забыли пароль?</Link>
      </div>
    </form>
  );
}
