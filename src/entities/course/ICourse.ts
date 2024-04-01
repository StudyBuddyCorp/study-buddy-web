export interface Course {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    studentsCount:number
    
    createdAt: Date;
    updatedAt: Date;
}