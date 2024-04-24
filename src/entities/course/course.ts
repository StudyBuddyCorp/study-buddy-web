export interface Course {
    id: string;
    title: string;
    description: string;
    body: string;
    imageUrl: string;
    studentsCount: number;

    createdAt: Date;
    updatedAt: Date;
}
