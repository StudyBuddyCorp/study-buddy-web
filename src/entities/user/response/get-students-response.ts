import { Response } from '../../../shared/lib/response';
import { User } from '../user';

export interface UserDtoes {
  userDtoes?: User[];
}

export interface GetStudentsResponse extends Response<UserDtoes> {}
