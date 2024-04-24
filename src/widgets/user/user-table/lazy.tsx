import { lazy, Suspense } from 'react';
import { UserTableSkeleton } from '.';

const Component = lazy(() => import('./component'));

const UserTableLazy = () => {
  return <Suspense fallback={<UserTableSkeleton />}>{<Component />}</Suspense>;
};

export default UserTableLazy;
