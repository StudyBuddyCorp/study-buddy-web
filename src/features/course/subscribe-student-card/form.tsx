import { Form } from '@ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { User } from '@user';
import { Button } from '@ui/button';
import { t } from 'i18next';
import { useEffect } from 'react';
import { Course } from '@course';
import { SelectStudentField } from './form/select-student-field/component';
import SelectCourseField from './form/select-course-field/component';
import { useSubscribeStudentMutation } from '@/shared/store/services/course-service';
import { useAppSelector } from '@/shared/store';
import { studentSubscribeSchema } from '@/schemas';

interface Props {
  students: User[];
  courses: Course[];
}

const SubscribeStudentForm = ({ students, courses }: Props) => {
  const { course } = useAppSelector(state => state.courseReducer);
  const [subscribe, { isLoading: isSubscribing }] =
    useSubscribeStudentMutation();

  const form = useForm<z.infer<typeof studentSubscribeSchema>>({
    resolver: zodResolver(studentSubscribeSchema),
    defaultValues: {
      courseId: course ? course.id : '',
      studentId: '',
    },
  });

  useEffect(() => {
    if (course?.id) {
      form.setValue('courseId', course.id);
    }
  }, [course, form]);

  const onSubmit = async (values: z.infer<typeof studentSubscribeSchema>) => {
    await subscribe(values);
  };

  if (courses && students) {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-y-4 w-full'>
          <SelectStudentField
            form={form}
            students={students}
          />
          <SelectCourseField
            form={form}
            courses={courses}
          />
          <Button
            disabled={isSubscribing}
            type='submit'>
            {t('student.subscribe-card.form.button')}
          </Button>
        </form>
      </Form>
    );
  }
};
export { SubscribeStudentForm };
