import { Loader2 } from 'lucide-react';

const LoadingRoute = () => {
  return (
    <div className='fixed w-full h-screen flex justify-center items-center'>
      <Loader2
        size={40}
        className='animate-spin'
      />
    </div>
  );
};

export default LoadingRoute;
