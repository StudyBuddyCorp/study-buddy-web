export enum Role {
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
}

export interface User {
  id: string;
  role: Role;
  name: string;
  email: string;
  departmentTitle: string;
  specialityTitle: string;
  groupId: string;
  groupNumber: number;
}
