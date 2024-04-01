import { Suspense, lazy } from "react";
import { CourseTableSkeleton } from ".";

const Component = lazy(() => import('./component'))


const CourseTableLazy = () => {

    return (
        <Suspense fallback={<CourseTableSkeleton />}>
            {<Component />}
        </Suspense>
    )
}

export default CourseTableLazy;