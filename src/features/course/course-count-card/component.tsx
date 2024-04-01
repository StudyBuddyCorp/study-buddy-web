import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { useCountQuery } from "@/shared/store/services/CourseService";
import { CourseCountCardSkeleton } from ".";
import { useTranslation } from "react-i18next";



const CourseCountCard = () => {


    const { t, i18n } = useTranslation()
    const { data } = useCountQuery()

    if (!data) {
        return <CourseCountCardSkeleton />
    }
    const onClick = () => {
        i18n.changeLanguage('en-US')
    }

    return (
        <Card onClick={onClick} className="w-full sm:max-w-sm">
            <CardHeader>
                <h4>{t('course.count-card.header')}</h4>
            </CardHeader>
            <CardContent className="flex-col gap-0 flex justify-center items-center w-full p-8">
                <h1 className="text-7xl">{data}</h1>
            </CardContent>
        </Card>
    )
}

export default CourseCountCard;