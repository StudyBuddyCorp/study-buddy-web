import { Course } from "@/entities/course";
import CourseCard from "@/features/course/CourseCard";
import clsx from "clsx";
import { FC } from "react";

interface Props {
    courses: Course[]
}

const CourseGrid: FC<Props> = ({ courses }) => {


    return (
        <div className={clsx("grid gap-4 w-full", courses.length === 1 && 'grid-cols-1', courses.length === 2 && 'grid-cols-2', courses.length % 3 === 0 ? 'grid-cols-3' : 'grid-cols-4')}>
            {courses.map(course => <CourseCard key={course.id} description={course.description} title={course.title} />)}
        </div>
    )
}

export default CourseGrid;