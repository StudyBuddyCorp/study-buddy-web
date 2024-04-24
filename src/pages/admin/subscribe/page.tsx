import { Heading, SelectCourse, SelectSubscriber } from '@/features/subscribe';
import CreateUserForm from '@/widgets/user/createUserForm/create-user-form';

const SubscribeToCourse = () => {
  return (
    <div className='m-4 flex flex-col gap-y-12'>
      <Heading />
      <SelectCourse />
      <SelectSubscriber />
      <CreateUserForm />
    </div>
  );
};

export default SubscribeToCourse;
