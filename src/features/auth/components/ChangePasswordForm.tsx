import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { changePasswordSchema, type ChangePasswordInput } from '../model/schemas';
import { useChangePassword } from '../hooks/useChangePassword';

export function ChangePasswordForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate: changePassword, isPending, error } = useChangePassword();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ChangePasswordInput>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordInput) => {
    changePassword(data, {
      onSuccess: () => {
        setIsSuccess(true);
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Смена пароля</h2>

      {isSuccess && <div className="success-message">Пароль успешно изменен!</div>}
      {error && <div className="error-message">{error.message}</div>}

      <div className="field">
        <label>Текущий пароль</label>
        <input {...register('currentPassword')} type="password" />
        {errors.currentPassword && <span className="field-error">{errors.currentPassword.message}</span>}
      </div>

      <div className="field">
        <label>Новый пароль</label>
        <input {...register('newPassword')} type="password" />
        {errors.newPassword && <span className="field-error">{errors.newPassword.message}</span>}
      </div>

      <div className="field">
        <label>Подтверждение нового пароля</label>
        <input {...register('confirmNewPassword')} type="password" />
        {errors.confirmNewPassword && <span className="field-error">{errors.confirmNewPassword.message}</span>}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? 'Сохранение...' : 'Сменить пароль'}
      </button>

      <div className="form-links form-links-center">
        <Link to="/login" className="text-link">Вернуться ко входу</Link>
      </div>
    </form>
  );
}