import { Role } from '@/entities/user';

export interface GetStudentsRequest {
  role?: Role;
  name?: string;
  department?: string;
  specialty?: string;
  groupId?: string;
}
