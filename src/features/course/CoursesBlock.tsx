import { useGetCoursesQuery } from "@/shared/store/services/CourseService";
import { useState } from "react";
import SelectCourseListType from "./SelectCoursesListType";
import CourseList from "./CourseList";
import CourseGrid from "./CourseGrid";

const CoursesBlock = () => {

    const { data: courses } = useGetCoursesQuery()
    const [listType, setListType] = useState<'GRID' | 'LIST'>('LIST')


    return (
        <div className="w-full mx-auto flex flex-col gap-y-4 mt-4 p-2 sm:p-0">
            <div className="flex gap-x-8">
                <h3 className="font-bold">Курсы</h3>
                <SelectCourseListType setListType={setListType} />
            </div>
            {courses && (listType === 'LIST' ? <CourseList courses={courses} /> : <CourseGrid courses={courses} />)}
        </div>
    )
}

export default CoursesBlock;