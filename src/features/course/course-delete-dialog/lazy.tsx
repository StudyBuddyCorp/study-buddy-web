import { Loader2 } from "lucide-react";
import { Suspense, lazy } from "react";

const Component = lazy(() => import("./component"))

const CourseDeleteDialogLazy = () => {

    return (
        <Suspense fallback={<Loader2 className="animate-spin"/>}>
            <Component/>
        </Suspense>
    )
}

export default CourseDeleteDialogLazy;