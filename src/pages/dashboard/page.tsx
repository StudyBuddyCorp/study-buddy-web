import { Course } from "@/entities/course";
import SelectCourseListType from "@/features/SelectCoursesListType";
import { supabase } from "@/shared/lib/supabase";
import CourseGrid from "@/widgets/course/CourseGrid";
import CourseList from "@/widgets/course/CourseList";
import { useEffect, useState } from "react";

const getCourses = async () => {
    const courses = await supabase.from('courses').select('*').then(res => res.data as Course[]);
    return courses
}

const DashboardPage = () => {

    const [courses, setCourses] = useState<Course[]>([])
    const [listType, setListType] = useState<'GRID' | 'LIST'>('LIST')

    useEffect(() => {
        getCourses().then((res) => setCourses(res))
    }, [])

    return (
        <div className="w-full md:max-w-3xl mx-auto flex flex-col gap-y-4 mt-4">
            <h3>Курсы</h3>
            <SelectCourseListType setListType={setListType} />
            {listType === 'LIST' ? <CourseList courses={courses} /> : <CourseGrid courses={courses} />}
        </div>
    )
}

export default DashboardPage;