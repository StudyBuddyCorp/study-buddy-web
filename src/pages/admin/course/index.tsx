import CardLazy from "@/shared/components/ui/card-lazy";
import { lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";

const CourseCreateForm = lazy(() => import('@/features/course/course-create-form/component'))
const CourseCountCardForm = lazy(() => import('@/features/course/course-count-card/component'))
const StudentCountForm = lazy(() => import('@/features/course/student-count-card/component'))
const SubscribeStudentForm = lazy(() => import('@/features/course/subscribe-student-card/component'))
const CourseDetails = lazy(() => import('@/widgets/course/course-details/component'))
const CourseTable = lazy(() => import('@/widgets/course/course-table/component'))

const AdminCourse = () => {

    const { t } = useTranslation()

    useEffect(() => {
        document.title = t('pages.admin.course')
    }, [t])

    return (
        <div className="w-full px-4 flex lg:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col-reverse w-full gap-y-8">
                <div className="flex 2xl:flex-row flex-col w-full gap-4">
                    <CardLazy>
                        <CourseCreateForm />
                    </CardLazy>
                    <CardLazy>
                        <CourseCountCardForm />
                    </CardLazy>
                    <CardLazy>
                        <StudentCountForm />
                    </CardLazy>
                    <CardLazy>
                        <SubscribeStudentForm />
                    </CardLazy>
                </div>
                <CardLazy>
                    <CourseTable />
                </CardLazy>
            </div>
            <CardLazy >
                <CourseDetails />
            </CardLazy>
        </div>
    )
}

export default AdminCourse;