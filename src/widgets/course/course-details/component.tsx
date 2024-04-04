import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { useTranslation } from "react-i18next";
import { gd } from "@/shared/lib/utils";
import { X } from "lucide-react";
import { courseSlice } from "@/shared/store/reducers/CourseSlice";
import { CSSTransition, SwitchTransition } from "react-transition-group";
const CourseDetails = () => {

    const { t } = useTranslation()
    const { course } = useAppSelector(state => state.courseReducer)
    const dispatch = useAppDispatch()
    const { setCourse, switchEdited } = courseSlice.actions

    const handleClose = () => {
        dispatch(setCourse(null))
    }

    const handleEditClick = () => {
        dispatch(switchEdited())
    }

    return (
        <Card className="relative w-full min-w-96 lg:max-w-md h-full flex flex-col">
            <SwitchTransition>
                <CSSTransition
                    key={course === null ? null : course.id}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='page'
                >
                    {course ?
                        <>
                            <button onClick={handleClose} className="absolute top-0 right-0 p-4" type="button">
                                <X className="hover:animate-pulse hover:scale-110 transition-all duration-200" />
                            </button>
                            <CardHeader>
                                <h4 className="flex gap-x-4">{t('course.course-details.header')} <span className="font-bold">{course.title}</span></h4>
                                <span className="font-light">{`${t('course.course-details.updated-at')}: ${gd(course.updatedAt)}`}</span>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-y-2 font-extralight">
                                <h3>{t('course.course-details.course-info')}</h3>
                                <div className="flex gap-x-4 items-center">
                                    <h6>{t('course.course-details.description')}:</h6>
                                    <span>{course.description}</span>
                                </div>
                                <span className="font-light">{`${t('course.course-details.created-at')}: ${gd(course.createdAt)}`}</span>
                                <div className="flex gap-x-4 items-center">
                                    <h6>{t('course.course-details.students')}:</h6>
                                    <span className="text-accent">{course.studentsCount}</span>
                                </div>
                                <h6>{t('course.course-details.groups')}:</h6>
                                <Button onClick={handleEditClick} variant='secondary'>{t('course.course-details.edit')}</Button>
                                <Button onClick={handleEditClick} variant='secondary'>{t('course.course-details.subscribe')}</Button>
                                <Button variant='destructive'>{t('course.course-details.delete')}</Button>
                            </CardContent>
                        </>
                        :
                        <div className="flex justify-center items-center w-full h-full">
                            <h4>{t('course.course-details.select')}</h4>
                        </div>}
                </CSSTransition>
            </SwitchTransition>

        </Card>
    )
}

export default CourseDetails;