import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from '@/ui/button';
import { SpinnerButton } from '@/ui/spinner-button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/form';
import { Input } from '@/ui/input';
import { Textarea } from '@/ui/textarea';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog';
import { useAppSelector } from '@/shared/store';
import { useEditMutation } from '@/shared/store/services/course-service';
import { courseUpdateSchema } from '@/schemas';

export const CourseEditDialog = () => {
  const { t } = useTranslation();
  const [edit, { isLoading }] = useEditMutation();
  const { course } = useAppSelector(state => state.courseReducer);

  const form = useForm<z.infer<typeof courseUpdateSchema>>({
    resolver: zodResolver(courseUpdateSchema),
    defaultValues: {
      id: course?.id,
      title: course?.title ?? '',
      description: course?.description ?? '',
    },
  });

  const onSubmit = async (values: z.infer<typeof courseUpdateSchema>) => {
    if (course?.id) {
      await edit(values);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type='button'
          variant='secondary'>
          {t('course.edit-form.trigger')}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('course.edit-form.title')}</DialogTitle>
          <DialogDescription>
            {t('course.edit-form.description')}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-y-4 w-full'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('course.edit-form.title-field')}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      autoComplete='title'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('course.edit-form.description-field')}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      autoComplete='description'
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose className='flex flex-col gap-y-2'>
              <SpinnerButton
                type='submit'
                disabled={isLoading}>
                {t('course.edit-form.save')}
              </SpinnerButton>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
