import { Course } from "@/entities/course";
import Card from "@/entities/course/card";
import { FC } from "react";

interface Props {
    courses: Course[]
}

const CourseList: FC<Props> = ({ courses }) => {

    return (
        <ul className="flex flex-col gap-y-4">
            {courses.map(course => <li key={course.id}><Card complexity={course.complexity} description={course.description} name={course.name} /></li>)}
        </ul>
    )
}

export default CourseList;