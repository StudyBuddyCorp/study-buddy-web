import { Course } from "@/entities/course";
import CourseCard from "@/features/course/CourseCard";
import { FC } from "react";

interface Props {
    courses?: Course[]
}

const CourseList: FC<Props> = ({ courses }) => {

    return (
        <ul className="flex flex-col gap-y-4 w-full h-full">
            {courses?.map(course => <li key={course.id}><CourseCard description={course.description} title={course.title} /></li>)}
            {!courses?.length && <div className="flex justify-center items-center w-full h-full">
                <h2>Курсы не найдены</h2>
                </div>}
        </ul>
    )
}

export default CourseList;