import { useParams } from "react-router-dom";
import Markdown from 'react-markdown'
import { useGetCourseQuery } from "@/shared/store/services/CourseService";
import { skipToken } from "@reduxjs/toolkit/query";
import { Loader2 } from "lucide-react";

const CoursePage = () => {

    const { id } = useParams()
    const markdown = '### Header and \n[github](https://github.com)'
    const { data: course, isLoading } = useGetCourseQuery(id ? { id } : skipToken)

    if (isLoading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <Loader2 className="animate-spin" />
            </div>
        )
    }

    if (course) {
        return (
            <div className="w-full sm:max-w-4xl mx-auto">
                Course with id {id}
                <Markdown>{markdown}</Markdown>
            </div>
        )
    }
}

export default CoursePage;