import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { memo } from "react";
import { Link } from "react-router-dom";

interface Props {
    id: string,
    title: string,
    description: string,
}

const CourseCard = memo(({ id, title, description }: Props) => {

    return (
        <Link to={`/course/${id}`}>
            <Card className="hover:scale-[101%] transition-all duration-200 hover:bg-card/50">
                <CardHeader>
                    <h4>{title}</h4>
                </CardHeader>
                <CardContent>
                    <div>{description}</div>
                </CardContent>
            </Card>
        </Link>
    )
})

export default CourseCard;