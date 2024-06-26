import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Card, CardContent, CardHeader } from '@/ui/card';
import CardLazy from '@/ui/card-lazy';
import { courseSlice } from '@/shared/store/reducers/course-slice';
import { gd } from '@/shared/lib/utils';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { CourseEditDialog } from '@/features/course/edit-form';
import { CourseDeleteDialog } from '@/features/course/delete-form';

const CourseDetails = () => {
  const { t } = useTranslation();
  const { course } = useAppSelector(state => state.courseReducer);
  const dispatch = useAppDispatch();
  const { setCourse } = courseSlice.actions;

  const handleClose = () => {
    dispatch(setCourse(null));
  };

  return (
    <Card className='sticky overflow-hidden top-0 left-0 w-full min-w-96 lg:max-w-md h-full flex flex-col'>
      <SwitchTransition>
        <CSSTransition
          key={course === null ? null : course.id}
          addEndListener={(node, done) =>
            node.addEventListener('transitionend', done, false)
          }
          classNames='page'>
          {course ? (
            <>
              <button
                onClick={handleClose}
                className='absolute top-0 right-0 p-4'
                type='button'>
                <X className='hover:animate-pulse hover:scale-110 transition-all duration-200' />
              </button>
              <CardHeader>
                <h4 className='flex gap-x-4'>
                  {t('course.course-details.header')}{' '}
                  <span className='font-bold'>{course.title}</span>
                </h4>
                <span className='font-light'>{`${t(
                  'course.course-details.updated-at',
                )}: ${gd(course.updatedAt)}`}</span>
              </CardHeader>
              <CardContent className='flex flex-col gap-y-2 font-extralight'>
                <h3>{t('course.course-details.course-info')}</h3>
                <div className='flex gap-x-4 items-start'>
                  <h6>{t('course.course-details.description')}:</h6>
                  <span>{course.description}</span>
                </div>
                <span className='font-light'>{`${t(
                  'course.course-details.created-at',
                )}: ${gd(course.createdAt)}`}</span>
                <div className='flex gap-x-4 items-center'>
                  <h6>{t('course.course-details.students')}:</h6>
                  <span className='text-accent'>{course.studentsCount}</span>
                </div>
                <h6>{t('course.course-details.groups')}:</h6>
                <CardLazy>
                  <CourseEditDialog />
                </CardLazy>
                <CardLazy>
                  <CourseDeleteDialog />
                </CardLazy>
              </CardContent>
            </>
          ) : (
            <div className='flex justify-center items-center w-full h-full'>
              <h4>{t('course.course-details.select')}</h4>
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Card>
  );
};

export default CourseDetails;
