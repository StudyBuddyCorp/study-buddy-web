import { Button } from '@ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@ui/dialog';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/shared/store';
import { useDeleteMutation } from '@/shared/store/services/course-service';

const CourseDeleteDialog = () => {
  const { t } = useTranslation();
  const [deleteCourse, { isLoading }] = useDeleteMutation();
  const { course } = useAppSelector(state => state.courseReducer);

  const handleDelete = async () => {
    if (course?.id) {
      await deleteCourse(course.id);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type='button'
          variant='destructive'>
          {t('course.course-details.delete-dialog.trigger')}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {t('course.course-details.delete-dialog.title')}
          </DialogTitle>
          <DialogDescription>
            {t('course.course-details.delete-dialog.description')}
          </DialogDescription>
        </DialogHeader>
        <DialogClose>
          <Button
            disabled={isLoading}
            variant='destructive'
            type='button'
            onClick={handleDelete}>
            {t('course.course-details.delete-dialog.button')}
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDeleteDialog;
