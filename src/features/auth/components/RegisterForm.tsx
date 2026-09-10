import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { registerSchema, type RegisterInput } from '../model/schemas';
import { useRegister } from '../hooks/useRegister';

export function RegisterForm() {
  const { mutate: registerUser, isPending, error } = useRegister();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => registerUser(data))} className="form-container">
      <h2>Регистрация</h2>

      {error && <div className="error-message">{error.message}</div>}

      <div className="field">
        <label>Email</label>
        <input {...register('email')} type="email" />
        {errors.email && <span className="field-error">{errors.email.message}</span>}
      </div>

      <div className="field">
        <label>Username</label>
        <input {...register('username')} type="text" />
        {errors.username && <span className="field-error">{errors.username.message}</span>}
      </div>

      <div className="field">
        <label>Name</label>
        <input {...register('name')} type="text" />
        {errors.name && <span className="field-error">{errors.name.message}</span>}
      </div>

      <div className="field">
        <label>Surname</label>
        <input {...register('surname')} type="text" />
        {errors.surname && <span className="field-error">{errors.surname.message}</span>}
      </div>

      <div className="field">
        <label>Пароль</label>
        <input {...register('password')} type="password" />
        {errors.password && <span className="field-error">{errors.password.message}</span>}
      </div>

      <div className="field">
        <label>Подтверждение пароля</label>
        <input {...register('confirmPassword')} type="password" />
        {errors.confirmPassword && <span className="field-error">{errors.confirmPassword.message}</span>}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? 'Создание...' : 'Зарегистрироваться'}
      </button>
      
      <div className="form-links form-links-center">
        <Link to="/login" className="text-link">Уже есть аккаунт? Войти</Link>
      </div>
    </form>
  );
}