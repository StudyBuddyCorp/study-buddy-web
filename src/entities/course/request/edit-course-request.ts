export interface EditCourseRequest {
    id: string,
    body: {
        title: string,
        description: string
        body: string
    }
}