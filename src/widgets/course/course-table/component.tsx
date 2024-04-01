import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table";
import { useAppDispatch } from "@/shared/store";
import { courseSlice } from "@/shared/store/reducers/SubscribeSlice";
import { useGetCoursesQuery } from "@/shared/store/services/CourseService";
import { CourseTableSkeleton } from ".";
import { useTranslation } from "react-i18next";
import { Card } from "@/shared/components/ui/card";



const CoursesTable = () => {

    const { t } = useTranslation()
    const { data: courses, isLoading } = useGetCoursesQuery()
    const { setCourse } = courseSlice.actions
    const dispatch = useAppDispatch()

    if (isLoading) {
        return <CourseTableSkeleton />
    }

    if(!courses) {
        return (
            <Card className="w-full h-full flex justify-center items-center flex-col gap-y-4">
                <h2>{t('course.table.error.header')}</h2>
                <h4>{t('course.table.error.body')}</h4>
            </Card>
        )
    }
    return (
        <Table className="bg-card rounded-2xl shadow-lg">
            <TableHeader>
                <TableHead>{t('course.table.title')}</TableHead>
                <TableHead>{t('course.table.description')}</TableHead>
            </TableHeader>
            <TableBody>
                {courses.map(course =>
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