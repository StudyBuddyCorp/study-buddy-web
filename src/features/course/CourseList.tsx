import { Course } from "@/entities/course";
import CourseCard from "@/features/course/CourseCard";
import { FC } from "react";

interface Props {
    courses: Course[]
}

const CourseList: FC<Props> = ({ courses }) => {

    return (
        <ul className="flex flex-col gap-y-4">
            {courses.map(course => <li key={course.id}><CourseCard description={course.description} title={course.title} /></li>)}
        </ul>
    )
}

export default CourseList;