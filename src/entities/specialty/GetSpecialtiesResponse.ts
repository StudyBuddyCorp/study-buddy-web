import { Specialty } from "./Specialty";

export interface GetSpecialtiesResponse extends Response {
    specialties: Specialty[]
}