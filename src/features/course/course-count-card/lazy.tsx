import { Suspense, lazy } from "react";
import { CourseCountCardSkeleton } from ".";

const Component = lazy(() => import('./component'))

const CourseCountCardLazy = () => {

    return (
        <Suspense fallback={<CourseCountCardSkeleton />}>
            {<Component />}
        </Suspense>
    )
}

export default CourseCountCardLazy;