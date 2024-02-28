import { FC, memo } from "react";
import { Complexity } from ".";
import ComplexityCard from "./Complexity";

interface Props {
    name: string,
    description: string,
    complexity: Complexity,
}

const Card: FC<Props> = memo(({ name, description, complexity }) => {

    return (
        <div className="bg-card p-4 flex flex-col gap-y-4 shadow-sm rounded-sm">
            <h4>{name}</h4>
            <div>{description}</div>
            <ComplexityCard complexity={complexity} />
        </div>
    )
})

export default Card;