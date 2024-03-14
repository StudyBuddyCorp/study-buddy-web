import { FC, memo } from "react";

interface Props {
    title: string,
    description: string,
}

const Card: FC<Props> = memo(({ title, description }) => {

    return (
        <div className="bg-card p-4 flex flex-col gap-y-4 shadow-sm rounded-sm">
            <h4>{title}</h4>
            <div>{description}</div>
        </div>
    )
})

export default Card;