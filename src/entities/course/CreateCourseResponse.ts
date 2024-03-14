import { IUser } from "../user/IUser";

export interface CreateCourseResponse extends Response {
  id: string;
  title: string;
  description: string;
  imageUrl: string;

  students: IUser[];
  teachers: IUser[];
}
