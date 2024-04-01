import { Suspense, lazy } from "react";
import { CourseCreateFormSkeleton } from ".";

const Component = lazy(() => import('./component'))

const CourseCreateFormLazy = () => {

    return (
        <Suspense fallback={<CourseCreateFormSkeleton />}>
            {<Component />}
        </Suspense>
    )
}

export default CourseCreateFormLazy;