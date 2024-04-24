import { User } from '@/entities/user';

export interface AuthenticationResponse {
  user: User;
  token: string;
}
