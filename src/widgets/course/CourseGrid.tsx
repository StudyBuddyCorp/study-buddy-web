import { Course } from "@/entities/course";
import Card from "@/entities/course/card";
import { FC } from "react";

interface Props {
    courses: Course[]
}

const CourseGrid:FC<Props> = ({courses}) => {

    return (
        <div className="grid ">
            {courses.map(course => <Card key={course.id} complexity={course.complexity} description={course.description} name={course.name} />)}
        </div>
    )
}

export default CourseGrid;