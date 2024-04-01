import { Suspense, lazy } from "react";
import StudentCountCardSkeleton from "./skeleton";

const Component = lazy(() => import('./component'))

const StudentCountCardLazy = () => {

    return (
        <Suspense fallback={<StudentCountCardSkeleton />}>
            {<Component />}
        </Suspense>
    )
}

export default StudentCountCardLazy;