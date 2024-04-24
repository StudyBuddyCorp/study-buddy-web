import { Link } from 'react-router-dom';

const AdminTeachers = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-y-4'>
      <h2>Пока что в разработке</h2>
      <Link
        to='/'
        className='text-accent hover:underline underline-offset-4'>
        На главную
      </Link>
    </div>
  );
};

export default AdminTeachers;
