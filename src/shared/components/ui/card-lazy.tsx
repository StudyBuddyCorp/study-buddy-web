import { ReactNode, Suspense } from "react";
import CardSkeleton from "./card-skeleton";

interface Props {
    children: ReactNode
}

const CardLazy = ({ children }: Props) => {

    return (
        <Suspense fallback={<CardSkeleton />}>
            {children}
        </Suspense>
    )
}

export default CardLazy;