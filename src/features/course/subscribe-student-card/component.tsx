import { Card, CardHeader, CardContent } from "@/shared/components/ui/card";
import { useTranslation } from "react-i18next";
import { SubscribeStudentForm } from "./form";





const SubscribeStudentCard = () => {

    const { t } = useTranslation()

    return (
        <Card className="w-full  min-w-fit">
            <CardHeader>
                <h4>{t('student.subscribe-card.header')}</h4>
            </CardHeader>
            <CardContent className="flex-col h-1/2 gap-0 flex justify-center items-center w-full p-8">
                <SubscribeStudentForm />
            </CardContent>
        </Card>
    )
}

export default SubscribeStudentCard;