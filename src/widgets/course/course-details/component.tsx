import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { useAppSelector } from "@/shared/store";
import { useTranslation } from "react-i18next";
import * as date from 'date-fns'
const CourseDetails = () => {

    const { t } = useTranslation()
    const { course } = useAppSelector(state => state.subscribeReducer)

    return (
        <Card className="w-full min-w-96 sm:max-w-md h-full">
            {course ?
                <>
                    <CardHeader>
                        <h4 className="flex gap-x-4">{t('course.course-details.header')} <span className="font-bold">{course.title}</span></h4>
                        <span className="font-light">{`${t('course.course-details.updated-at')}: 1 апреля 2024 г.`}</span>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-4">
                        <h3>{t('course.course-details.course-info')}</h3>
                        <span className="font-light">{`${t('course.course-details.created-at')}: ${date.getDate(course.createdAt)}.${date.getMonth(course.createdAt)}.${date.getYear(course.createdAt)} ${t('course.course-details.year')}`}</span>
                        <span>{t('course.course-details.students')}</span>
                        <span>{t('course.course-details.groups')}</span>
                        <Button variant='secondary'>{t('course.course-details.edit')}</Button>
                        <Button variant='destructive'>{t('course.course-details.delete')}</Button>
                    </CardContent>
                </>
                :
                <div className="flex justify-center items-center w-full h-full">
                    <h4>{t('course.course-details.select')}</h4>
                </div>}
        </Card>
    )
}

export default CourseDetails;