import { User } from '../user';

export interface CreateUserResponse extends Response {
  user: User;
}
