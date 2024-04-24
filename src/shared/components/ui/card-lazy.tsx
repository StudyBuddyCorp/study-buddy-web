import { ReactNode, Suspense } from 'react';
import { CardSkeleton } from '@/shared/components/ui/card-skeleton';

interface Props {
  children: ReactNode;
}

const CardLazy = ({ children }: Props) => {
  return <Suspense fallback={<CardSkeleton />}>{children}</Suspense>;
};

export default CardLazy;
