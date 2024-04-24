import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SelectCourseListType from './select-course-list-type';
import CourseGrid from './course-grid';
import CourseList from './course-list';
import { useGetCoursesQuery } from '@/shared/store/services/course-service';

export const CoursesBlock = () => {
  const { t } = useTranslation();

  const { data: courses } = useGetCoursesQuery({});
  const [listType, setListType] = useState<'GRID' | 'LIST'>('LIST');

  return (
    <div className='w-full h-full mx-auto flex flex-col gap-y-4 mt-4 p-2 sm:p-0'>
      <div className='flex gap-x-8'>
        <h3 className='font-bold'>{t('home.courses-header')}</h3>
        <SelectCourseListType setListType={setListType} />
      </div>
      {listType === 'LIST' ? (
        <CourseList courses={courses} />
      ) : (
        <CourseGrid courses={courses} />
      )}
    </div>
  );
};