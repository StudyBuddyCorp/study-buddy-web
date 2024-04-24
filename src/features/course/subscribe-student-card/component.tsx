import { useTranslation } from 'react-i18next';
import { CircleAlert } from 'lucide-react';
import { CardSkeleton } from '@/ui/card-skeleton';
import { SubscribeStudentForm } from '@/features/course/subscribe-student-card/form';
import { Card, CardContent, CardHeader } from '@/ui/card';
import { Role } from '@/entities/user';
import { useGetCoursesQuery } from '@/shared/store/services/course-service';
import { useGetUsersQuery } from '@/shared/store/services/user-service';

const SubscribeStudentCard = () => {
  const { t } = useTranslation();
  const { data: students, isLoading: isStudentsLoading } = useGetUsersQuery({
    role: Role.STUDENT,
  });
  const { data: courses, isLoading: isCoursesLoading } = useGetCoursesQuery({});

  if (isStudentsLoading || isCoursesLoading) {
    return <CardSkeleton />;
  }

  return (
    <Card className='w-full'>
      <CardHeader>
        <h4>{t('student.subscribe-card.header')}</h4>
      </CardHeader>
      <CardContent className='flex-col  gap-0 flex justify-center items-center w-full p-8'>
        {students && courses ? (
          <SubscribeStudentForm
            students={students}
            courses={courses}
          />
        ) : (
          <div className='flex flex-col gap-y-2 items-center'>
            <CircleAlert className='text-destructive' />
            <h4>Not found</h4>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscribeStudentCard;
