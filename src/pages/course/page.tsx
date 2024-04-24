import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { skipToken } from '@reduxjs/toolkit/query';
import { Loader2 } from 'lucide-react';
import { Pencil1Icon } from '@radix-ui/react-icons';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  useCheckEditQuery,
  useEditMutation,
  useGetCourseQuery,
} from '@/shared/store/services/course-service';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Button } from '@/shared/components/ui/button';
import { courseSlice } from '@/shared/store/reducers/course-slice';
import { Textarea } from '@/shared/components/ui/textarea';
import SpinnerButton from '@/shared/components/ui/SpinnerButton';

const CoursePage = () => {
  const { id } = useParams();
  const { user } = useAppSelector(state => state.authReducer);
  const { isEditing, course } = useAppSelector(state => state.courseReducer);

  const { data, isLoading } = useGetCourseQuery(id ? { id } : skipToken);
  const { data: isEditable } = useCheckEditQuery(
    user?.id && id ? { courseId: id, userId: user.id } : skipToken,
  );
  const [markdown, setMarkdown] = useState(course?.body ?? '');

  const { handleEditing, setCourse } = courseSlice.actions;
  const dispatch = useAppDispatch();

  const [handleEdit, { isLoading: isSavingChanges }] = useEditMutation();

  useEffect(() => {
    if (data) {
      dispatch(setCourse(data));
    }
    return () => {
      dispatch(setCourse(null));
    };
  }, [data, dispatch, handleEditing, isEditing, setCourse]);

  useEffect(() => {
    if (course?.body) {
      setMarkdown(course.body);
    }
  }, [course?.body]);

  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <Loader2 className='animate-spin' />
      </div>
    );
  }

  const handleBodyCreate = () => {
    dispatch(handleEditing());
    if (id && course) {
      handleEdit({
        id,
        title: course.title,
        description: course.description,
        body: '#### Body example\n**Bold text** *Italic text*\n * list item 1\n * list item 2',
      });
      course.body = 'New body';
    }
  };

  const handleSaveChanges = () => {
    if (course) {
      handleEdit({
        id: course.id,
        title: course.title,
        description: course.description,
        body: course.body,
      });
    }
  };

  if (course) {
    const { title, description } = course;

    const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMarkdown(e.target.value);
    };

    return (
      <div className='w-full h-full sm:max-w-4xl mx-auto flex flex-col gap-y-8'>
        <div className='flex flex-col sticky'>
          <h2>{title}</h2>
          <p>{description}</p>
          {isEditable && (
            <Button
              className='absolute top-0 right-0'
              onClick={handleBodyCreate}
              variant='ghost'
              size='icon'>
              <Pencil1Icon />
            </Button>
          )}
        </div>
        <div className='w-full flex flex-col gap-y-8 h-full'>
          {isEditing ? (
            <>
              <Textarea
                className='h-full w-full'
                value={markdown}
                onChange={onValueChange}
              />
              <SpinnerButton
                disabled={isSavingChanges}
                onClick={handleSaveChanges}>
                Save
              </SpinnerButton>
            </>
          ) : (
            <Markdown className='markdown'>
              {markdown ?? '#### This course is seems empty! :('}
            </Markdown>
          )}
          {isEditing && !markdown && (
            <Button
              className='w-fit'
              variant='ghost'
              size='sm'
              onClick={handleSaveChanges}>
              Add some content
            </Button>
          )}
        </div>
      </div>
    );
  }
};

export default CoursePage;
