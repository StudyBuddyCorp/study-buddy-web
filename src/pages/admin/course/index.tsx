import { CourseCountCardLazy } from "@/features/course/course-count-card";
import { CourseCreateFormLazy } from "@/features/course/course-create-form";
import { StudentCountCardLazy } from "@/features/course/student-count-card";
import { CourseDetailsLazy } from "@/widgets/course/course-details";
import { CourseTableLazy } from "@/widgets/course/course-table";

const AdminCourse = () => {

    return (
        <div className="w-full h-full px-8 flex gap-x-4 justify-between">
            <div className="flex flex-col w-full h-full gap-y-8">
                <div className="flex w-full gap-4">
                    <CourseCreateFormLazy />
                    <CourseCountCardLazy />
                    <StudentCountCardLazy />
                </div>
                <CourseTableLazy />
            </div>
            <div className="h-full">
                <CourseDetailsLazy />
            </div>
        </div>
    )
}

export default AdminCourse;