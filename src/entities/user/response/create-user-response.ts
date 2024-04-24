import { User } from '@/entities/user';

export interface CreateUserResponse extends Response {
  user: User;
}
