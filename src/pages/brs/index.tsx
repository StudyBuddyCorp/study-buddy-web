import { Card } from "@/shared/components/ui/card";
import {Table, TableBody, TableHead, TableHeader} from "@/shared/components/ui/table";
import { useTranslation } from "react-i18next";


const BrsPage = () => {
    const { t } = useTranslation()

    return (
        <div className="w-full h-full flex justify-center items-center flex-col gap-y-4">
            <Card className="bg-card rounded-2xl shadow-lg">
            <Table >
                <TableHeader>
                    <TableHead>{t('brs.table.year')}</TableHead>
                    <TableHead>{t('brs.table.courseNum')}</TableHead>
                    <TableHead>{t('brs.table.courseTitle')}</TableHead>
                    <TableHead>{t('brs.table.teacher')}</TableHead>
                    <TableHead>{t('brs.table.reporting')}</TableHead>
                    <TableHead>{t('brs.table.attestation1')}</TableHead>
                    <TableHead>{t('brs.table.attestation2')}</TableHead>
                    <TableHead>{t('brs.table.attestation3')}</TableHead>
                    <TableHead>{t('brs.table.average')}</TableHead>
                    <TableHead>{t('brs.table.exam')}</TableHead>
                    <TableHead>{t('brs.table.extra')}</TableHead>
                    <TableHead>{t('brs.table.total')}</TableHead>
                </TableHeader>
                <TableBody>
                </TableBody>
            </Table>
            </Card>
        </div>
    )
}

export default BrsPage;
