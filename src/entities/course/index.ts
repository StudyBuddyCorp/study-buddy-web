export enum Complexity{
    EASY =  'EASY',
    MEDIUM = 'MEDIUM',
    DIFFICULT = 'DIFFICULT'
}
export interface Course {
    id: number,
    name: string,
    description: string,
    complexity: Complexity,
    created_at: Date
}