import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { memo } from "react";

interface Props {
    title: string,
    description: string,
}

const CourseCard = memo(({ title, description }: Props) => {

    return (
        <Card>
            <CardHeader>
                <h4>{title}</h4>
            </CardHeader>
            <CardContent>
                <div>{description}</div>
            </CardContent>
        </Card>
    )
})

export default CourseCard;