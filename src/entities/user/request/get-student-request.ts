import { Role } from '../user';

export interface GetStudentsRequest {
  role?: Role;
  name?: string;
  department?: string;
  specialty?: string;
  groupId?: string;
}
