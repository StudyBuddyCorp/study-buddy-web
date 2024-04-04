import { Role } from "@/entities/user/IUser";
import { Card, CardHeader, CardContent } from "@/shared/components/ui/card";
import { useCountQuery } from "@/shared/store/services/UserService";
import { StudentCountCardSkeleton } from ".";
import { useTranslation } from "react-i18next";
import { CircleAlert } from "lucide-react";

const StudentCountCard = () => {

    const { t } = useTranslation()
    const { data, isLoading } = useCountQuery({ role: Role.STUDENT })

    if (isLoading) {
        return <StudentCountCardSkeleton />
    }

    return (
        <Card className="w-full  min-w-fit">
            <CardHeader>
                <h4>{t('student.count-card.header')}</h4>
            </CardHeader>
            <CardContent className="flex-col h-1/2 gap-0 flex justify-center items-center w-full p-8">
                {data ?
                    <h1 className="text-8xl">{data}</h1>

                    : <div className="flex justify-center items-center flex-col gap-y-2">
                        <CircleAlert className="text-destructive"/>
                        <h6 >{t('student.count-card.error')}</h6>
                    </div>
                }
            </CardContent>
        </Card>
    )
}

export default StudentCountCard;