import { User } from '../user/user';

export interface AuthenticationResponse {
  user: User;
  token: string;
}
