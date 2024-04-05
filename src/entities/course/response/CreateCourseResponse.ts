import { User } from "../../user/IUser";

export interface CreateCourseResponse extends Response {
  id: string;
  title: string;
  description: string;
  imageUrl: string;

  students: User[];
  teachers: User[];
}
