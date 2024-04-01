import { CourseCountCardLazy } from "@/features/course/course-count-card";
import { CourseCreateFormLazy } from "@/features/course/course-create-form";
import { StudentCountCardLazy } from "@/features/course/student-count-card.tsx";

const AdminCourse = () => {

    return (
        <div className="w-full h-full px-8">
            <div className="flex w-full gap-4">
                <CourseCreateFormLazy />
                <CourseCountCardLazy />
                <StudentCountCardLazy />
            </div>
        </div>
    )
}

export default AdminCourse;