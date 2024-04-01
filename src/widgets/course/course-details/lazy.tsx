import { lazy, Suspense } from 'react';
import { CourseDetailsSkeleton } from '.';

const Component = lazy(() => import('./component'))

const CourseDetailsLazy = () => {

    return (
        <Suspense fallback={<CourseDetailsSkeleton />}>
            {<Component />}
        </Suspense>
    )
}

export default CourseDetailsLazy;