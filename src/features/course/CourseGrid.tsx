import { Course } from "@/entities/course";
import CourseCard from "@/features/course/CourseCard";
import clsx from "clsx";
import { FC } from "react";

interface Props {
    courses?: Course[]
}

const CourseGrid: FC<Props> = ({ courses }) => {


    return (
        <ul className={clsx(courses && "grid gap-4 w-full",
            courses?.length === 1 && 'grid-cols-1',
            courses?.length === 2 && 'grid-cols-2',
            courses?.length && courses.length % 3 === 0 ? 'grid-cols-3' : 'grid-cols-4',
            !courses && "w-full flex justify-center items-center")}>
            {courses?.map(course => <CourseCard key={course.id} id={course.id} description={course.description} title={course.title} />)}
            {!courses?.length && <div className="flex justify-center items-center w-full h-full">
                <h2>Курсы не найдены</h2>
            </div>}
        </ul>
    )
}

export default CourseGrid;