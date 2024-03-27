import { Course } from "@/entities/course";
import SelectCourseListType from "@/features/SelectCoursesListType";
import { courseAPI } from "@/shared/store/services/CourseService";
import CourseGrid from "@/widgets/course/CourseGrid";
import CourseList from "@/widgets/course/CourseList";
import { useState } from "react";


const DashboardPage = () => {

    const { data: courses } = courseAPI.useGetCoursesQuery();
    const [listType, setListType] = useState<'GRID' | 'LIST'>('LIST')


    return (
        <div className="w-full md:max-w-3xl mx-auto flex flex-col gap-y-4 mt-4 p-2 sm:p-0">
            <div className="flex gap-x-8">
                <h3 className="font-bold">Курсы</h3>
                <SelectCourseListType setListType={setListType} />
            </div>
            {courses && (listType === 'LIST' ? <CourseList courses={courses} /> : <CourseGrid courses={courses} />)}
        </div>
    )
}

export default DashboardPage;