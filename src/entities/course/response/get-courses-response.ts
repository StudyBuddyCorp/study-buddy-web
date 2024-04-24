import { Course } from '..';

export interface GetCoursesResponse extends Response {
  courses: Course[];
}
