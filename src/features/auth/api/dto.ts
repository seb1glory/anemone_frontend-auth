import { type LoginInput, type RegisterInput, type ChangePasswordInput } from '../model/schemas';

export type LoginRequestDTO = LoginInput;
export type RegisterRequestDTO = RegisterInput;
export type ChangePasswordRequestDTO = ChangePasswordInput;

export interface AuthResponseDTO {
  message?: string;
  user?: {
    email: string;
    username: string;
    name: string;
    surnaame: string;
  };
}
