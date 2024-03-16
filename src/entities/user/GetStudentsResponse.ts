import { IUser } from "./IUser";

export interface GetStudentsResponse extends Response {
  students: IUser[];
}
