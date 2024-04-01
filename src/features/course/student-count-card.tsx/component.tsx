import { Role } from "@/entities/user/IUser";
import { Card, CardHeader, CardContent } from "@/shared/components/ui/card";
import { useCountQuery } from "@/shared/store/services/UserService";
import { StudentCountCardSkeleton } from ".";
import { useTranslation } from "react-i18next";

const StudentCountCard = () => {

    const { t } = useTranslation()
    const { data } = useCountQuery({ role: Role.STUDENT })

    if (!data) {
        return <StudentCountCardSkeleton />
    }

    return (
        <Card className="w-full sm:max-w-sm">
            <CardHeader>
                <h4>{t('student.count-card.header')}</h4>
            </CardHeader>
            <CardContent className="flex-col gap-0 flex justify-center items-center w-full p-8">
                <h1 className="text-7xl">{data}</h1>
            </CardContent>
        </Card>
    )
}

export default StudentCountCard;