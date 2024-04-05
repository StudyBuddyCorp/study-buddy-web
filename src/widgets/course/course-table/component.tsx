import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { courseSlice } from "@/shared/store/reducers/CourseSlice";
import { useGetCoursesQuery } from "@/shared/store/services/CourseService";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { CircleAlert, ListFilter } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Select, SelectValue } from "@/shared/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { Input } from "@/shared/components/ui/input";
import { useState } from "react";
import { useDebounce } from "@/shared/hooks/useDebounce";
import CardSkeleton from "@/shared/components/ui/card-skeleton";



const CoursesTable = () => {

    const { t } = useTranslation()
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500)
    const { data: courses, isLoading } = useGetCoursesQuery(debouncedSearch ? { title: debouncedSearch } : {})
    const { course: selected } = useAppSelector(state => state.courseReducer)
    const { setCourse } = courseSlice.actions
    const dispatch = useAppDispatch()

    if (isLoading) {
        return <CardSkeleton />
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    if (!courses) {
        return (
            <Card className="w-full h-full flex justify-center items-center flex-col gap-y-4">
                {isLoading && <CardSkeleton />}
                <CircleAlert className="text-destructive" />
                <h2>{t('course.table.error.header')}</h2>
                <h4>{t('course.table.error.body')}</h4>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-row gap-4">
                    <h2>{t('course.table.header')}</h2>
                    <Input onChange={handleInputChange} placeholder={t('course.table.input')} />
                </div>
                <div>
                    <Select >
                        <SelectTrigger aria-label="select filter display variant" className="bg-background px-4 py-2 rounded-md hidden sm:flex h-full">
                            <SelectValue placeholder={
                                <div className="flex gap-4">
                                    <ListFilter />
                                    {t('course.table.filter')}
                                </div>
                            }>

                            </SelectValue>
                        </SelectTrigger>
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <Table className="bg-card rounded-2xl">
                    <TableHeader>
                        <TableHead>{t('course.table.title')}</TableHead>
                        <TableHead>{t('course.table.description')}</TableHead>
                        <TableHead className="text-right">{t('course.table.students-count')}</TableHead>
                    </TableHeader>
                    <TableBody>
                        {courses.map(course =>
                            <TableRow onClick={() => dispatch(setCourse(course))} className={cn("cursor-pointer", selected && course.id === selected.id && 'bg-muted')} key={course.id}>
                                <TableCell className="font-semibold">{course.title}</TableCell>
                                <TableCell>{course.description}</TableCell>
                                <TableCell className="text-right">{course.studentsCount}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )

}

export default CoursesTable;