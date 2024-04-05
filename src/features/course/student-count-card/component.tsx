import { Role } from "@/entities/user/IUser";
import { Card, CardHeader, CardContent } from "@/shared/components/ui/card";
import { useCountQuery } from "@/shared/store/services/UserService";
import { useTranslation } from "react-i18next";
import { CircleAlert } from "lucide-react";
import CardSkeleton from "@/shared/components/ui/card-skeleton";

const StudentCountCard = () => {

    const { t } = useTranslation()
    const { data, isLoading } = useCountQuery({ role: Role.STUDENT })

    if (isLoading) {
        return <CardSkeleton />
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <h2 className="font-light">{t('student.count-card.header')}</h2>
            </CardHeader>
            <CardContent className="flex-col gap-0 flex justify-center items-center w-full p-8">
                {data ?
                    <h1 className="text-8xl">{data}</h1>

                    : <div className="flex justify-center items-center flex-col gap-y-2">
                        <CircleAlert className="text-destructive"/>
                        <h4 >{t('student.count-card.error')}</h4>
                    </div>
                }
            </CardContent>
        </Card>
    )
}

export default StudentCountCard;