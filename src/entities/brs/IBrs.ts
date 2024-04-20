export interface Brs {
    id: string;
    year: number;
    courseNum: number;
    courseTitle: string;
    teacher: string;
    reporting: string;
    attestation1: number;
    attestation2: number;
    attestation3: number;
    average: number;
    exam: number;
    extra: number;
    total: number;
    
    createdAt: Date;
    updatedAt: Date;
}