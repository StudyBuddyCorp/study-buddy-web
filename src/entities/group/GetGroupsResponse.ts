import { Group } from "./Group";

export interface GetGroupsResponse extends Response {
    groups: Group[]
}