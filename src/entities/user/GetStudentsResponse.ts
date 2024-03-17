import { StudentTableData } from "./StudentTableData";

export interface GetStudentsResponse extends Response {
  students: StudentTableData[];
}
