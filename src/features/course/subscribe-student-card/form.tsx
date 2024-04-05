import { Form } from "@/shared/components/ui/form"
import { SelectStudentField } from "./form/select-student-field/component";;
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./formSchema";
import * as z from "zod";
import SelectCourseField from "./form/select-course-field/component";
import { useSubscribeStudentMutation } from "@/shared/store/services/CourseService";
import { User } from "@/entities/user/IUser";
import { Button } from "@/shared/components/ui/button";
import { t } from "i18next";
import { useAppSelector } from "@/shared/store";
import { useEffect } from "react";
import { Course } from "@/entities/course";




interface Props {
    students: User[],
    courses: Course[]
}

const SubscribeStudentForm = ({students, courses}:Props) => {

    const { course } = useAppSelector(state => state.courseReducer)
   const [subscribe, { isLoading: isSubscribing }] = useSubscribeStudentMutation()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courseId: course ? course.id : '',
            studentId: ''
        }
    })

    useEffect(() => {
        if (course?.id) {
            form.setValue('courseId', course.id)
        }
    }, [course, form])



    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await subscribe(values)
    }

    if (courses && students) {
        return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4 w-full">
                    <SelectStudentField form={form} students={students} />
                    <SelectCourseField form={form} courses={courses} />
                    <Button disabled={isSubscribing} type="submit">{t('student.subscribe-card.form.button')}</Button>
                </form>
            </Form>
        );
    }
   
}
export { SubscribeStudentForm }

