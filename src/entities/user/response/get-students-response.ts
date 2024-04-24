import { Response } from '../../../shared/lib/response';
import { User } from '@/entities/user';

export interface UserDtoes {
  userDtoes?: User[];
}

export interface GetStudentsResponse extends Response<UserDtoes> {}
