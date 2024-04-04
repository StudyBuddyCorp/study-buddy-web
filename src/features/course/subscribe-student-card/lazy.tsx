import { Suspense, lazy } from "react";
import SubscribeStudentCardSkeleton from "./skeleton";

const Component = lazy(() => import('./component'))

const SubscribeStudentCardLazy = () => {

    return (
        <Suspense fallback={<SubscribeStudentCardSkeleton />}>
            {<Component />}
        </Suspense>
    )
}

export default SubscribeStudentCardLazy;