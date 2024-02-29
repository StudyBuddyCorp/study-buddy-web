import { Course } from "@/entities/course";
import Card from "@/entities/course/card";
import clsx from "clsx";
import { FC } from "react";

interface Props {
    courses: Course[]
}

const CourseGrid: FC<Props> = ({ courses }) => {


    return (
        <div className={clsx("grid gap-4 w-full", courses.length === 1 && 'grid-cols-1', courses.length === 2 && 'grid-cols-2', courses.length % 3 === 0 ? 'grid-cols-3' : 'grid-cols-4')}>
            {courses.map(course => <Card key={course.id} complexity={course.complexity} description={course.description} name={course.name} />)}
        </div>
    )
}

export default CourseGrid;