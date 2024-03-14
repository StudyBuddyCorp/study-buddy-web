import { Department } from "./Department";

export interface GetDepartmentsResponse extends Response {
  departments: Department[];
}
