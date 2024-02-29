import { Course } from "@/entities/course";
import SelectCourseListType from "@/features/SelectCoursesListType";
import { supabase } from "@/shared/lib/supabase";
import { useAppSelector } from "@/shared/store";
import CourseGrid from "@/widgets/course/CourseGrid";
import CourseList from "@/widgets/course/CourseList";
import { useEffect, useState } from "react";

const getCourses = async (id: string) => {
    const courses = await supabase.from('active_courses').select('*').eq('user_id', id).then(res => res.data as Course[]);
    return courses
}

const DashboardPage = () => {

    const { user } = useAppSelector(state => state.authReducer)
    const [courses, setCourses] = useState<Course[]>([])
    const [listType, setListType] = useState<'GRID' | 'LIST'>('LIST')

    useEffect(() => {
        if (user?.id) {
            getCourses(user.id).then((res) => setCourses(res))
        }
    }, [user?.id])

    return (
        <div className="w-full md:max-w-3xl mx-auto flex flex-col gap-y-4 mt-4 p-2 sm:p-0">
            <h3>Курсы</h3>
            <SelectCourseListType setListType={setListType} />
            {listType === 'LIST' ? <CourseList courses={courses} /> : <CourseGrid courses={courses} />}
        </div>
    )
}

export default DashboardPage;