import { useEffect } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Button } from '@ui/button';

const ErrorPage = () => {
  const error = useRouteError() as { statusText?: string; message: string };

  useEffect(() => {
    document.title = 'Ошибка!';
  }, []);

  return (
    <div className='flex justify-center items-center flex-col gap-4 h-screen'>
      <h1>{error.statusText ?? error.message}</h1>
      <p>Произошла непредвиденная ошибка. Приносим свои извинения</p>
      <Link to={'/'}>
        <Button variant='secondary'>Вернуться на главную</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
