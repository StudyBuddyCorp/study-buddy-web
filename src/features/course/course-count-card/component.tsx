import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { useCountQuery } from "@/shared/store/services/CourseService";
import { CourseCountCardSkeleton } from ".";
import { useTranslation } from "react-i18next";



const CourseCountCard = () => {


    const { t } = useTranslation()
    const { data, isLoading } = useCountQuery()

    if (isLoading) {
        return <CourseCountCardSkeleton />
    }

    return (
        <Card className="w-full sm:max-w-sm">
            <CardHeader>
                <h4>{t('course.count-card.header')}</h4>
            </CardHeader>
            <CardContent className="flex-col gap-0 flex justify-center items-center w-full p-8">
                <h1 className="text-7xl">{data ?? t('course.count-card.error')}</h1>
            </CardContent>
        </Card>
    )
}

export default CourseCountCard;