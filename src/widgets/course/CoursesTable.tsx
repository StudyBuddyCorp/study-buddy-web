import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table";
import { useAppDispatch } from "@/shared/store";
import { subscribeSlice } from "@/shared/store/reducers/SubscribeSlice";
import { useGetCoursesQuery } from "@/shared/store/services/CourseService";
import { Loader2 } from "lucide-react";



const CoursesTable = () => {

    const { data: courses, isLoading } = useGetCoursesQuery()
    const { setCourse } = subscribeSlice.actions
    const dispatch = useAppDispatch()

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
                    <TableRow onClick={() => dispatch(setCourse(course))} className="cursor-pointer" key={course.id}>
                        <TableCell className="font-semibold">{course.title}</TableCell>
                        <TableCell>{course.description}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )

}

export default CoursesTable;