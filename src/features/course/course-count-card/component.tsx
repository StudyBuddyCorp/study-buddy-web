import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { useCountQuery } from "@/shared/store/services/CourseService";
import { CourseCountCardSkeleton } from ".";
import { useTranslation } from "react-i18next";
import { CircleAlert } from "lucide-react";



const CourseCountCard = () => {


    const { t } = useTranslation()
    const { data, isLoading } = useCountQuery()

    if (isLoading) {
        return <CourseCountCardSkeleton />
    }

    return (
        <Card className="w-full  min-w-fit">
            <CardHeader>
                <h4>{t('course.count-card.header')}</h4>
            </CardHeader>
            <CardContent className="flex-col gap-0 flex justify-center items-center w-full p-8">
                {data ?
                    <h1 className="text-7xl">{data}</h1>

                    : <div className="flex justify-center items-center flex-col gap-y-2">
                        <CircleAlert className="text-destructive" />
                        <h6 >{t('student.count-card.error')}</h6>

                    </div>
                }
            </CardContent>
        </Card>
    )
}

export default CourseCountCard;