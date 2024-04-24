import { HeartCrack } from 'lucide-react';
import { CourseCard } from '@/features/course/course-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';
import { UserTable } from '@/widgets/user/user-table';
import { Button } from '@/ui/button';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { courseSlice } from '@/shared/store/reducers/course-slice';

export const SelectSubscriber = () => {
  const { course } = useAppSelector(state => state.courseReducer);
  const dispatch = useAppDispatch();
  const { setCourse } = courseSlice.actions;

  if (course) {
    return (
      <div className='flex flex-col w-full gap-y-4'>
        <h4>Вы выбрали:</h4>
        <CourseCard
          id={course.id}
          description={course.description}
          title={course.title}
        />
        <Button
          className='flex justify-start'
          variant='ghost'
          size='sm'
          onClick={() => dispatch(setCourse(null))}>
          Отменить выбор
        </Button>
        <h4>Кого хотите подписать?</h4>
        <Accordion
          className='w-full bg-card p-8 rounded-md shadow-sm'
          type='single'
          collapsible>
          <AccordionItem value='student'>
            <AccordionTrigger>Подписать студента</AccordionTrigger>
            <AccordionContent>
              <UserTable />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='group'>
            <AccordionTrigger>Подписать группу</AccordionTrigger>
            <AccordionContent className='flex justify-center items-center flex-col gap-4 p-4'>
              <h4>Пока что в разработке...</h4>
              <HeartCrack />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
};