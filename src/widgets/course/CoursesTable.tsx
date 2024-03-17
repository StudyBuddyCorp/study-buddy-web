import { Course } from "@/entities/course";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table";
import { courseAPI } from "@/shared/store/services/CourseService";
import { Loader2 } from "lucide-react";

interface TableProps {
    setCourse: (course: Course) => void
}

const CoursesTable = ({ setCourse }: TableProps) => {

    const { data: courses, isLoading } = courseAPI.useGetCoursesQuery()

    if (isLoading) {
        return (
            <div className="w-full flex justify-center items-center">
                <Loader2 className="animate-spin" />
            </div>
        )
    }
    return (
        <Table className="bg-card shadow-sm rounded-md">
            <TableHeader>
                <TableHead>Название</TableHead>
                <TableHead>Описание</TableHead>
            </TableHeader>
            <TableBody>
                {courses?.map(course =>
                    <TableRow className="cursor-pointer" onClick={() => setCourse(course)} key={course.id}>
                        <TableCell className="font-semibold">{course.title}</TableCell>
                        <TableCell>{course.description}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )

}

export default CoursesTable;