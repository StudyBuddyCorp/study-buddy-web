import { Card } from "@/shared/components/ui/card";
import {Table, TableBody, TableHead, TableHeader, TableCell, TableRow} from "@/shared/components/ui/table";
import { useTranslation } from "react-i18next";
import BrsTableSkeleton from "./skeleton";
import { useGetBrsQuery } from "@/shared/store/services/BrsService";
import { useAppSelector } from "@/shared/store";
import { skipToken } from "@reduxjs/toolkit/query";
import { CircleAlert } from "lucide-react";


const BrsPage = () => {
    const { t } = useTranslation()
    const {user} = useAppSelector(state => state.authReducer)
    const { data: brss, isLoading } = useGetBrsQuery(user?.id ?? skipToken)

    if (isLoading) {
        return <BrsTableSkeleton/>
    }

    if (!brss) {
        return (
            <Card className="w-full h-full flex justify-center items-center flex-col gap-y-4">
                <CircleAlert className="text-destructive" />
                <h2>{t('brs.table.error.header')}</h2>
                <h4>{t('brs.table.error.body')}</h4>
            </Card>
        )
    }

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
                    {brss?.map(brs =>
                        <TableRow>
                            <TableCell>{brs.year}</TableCell>
                            <TableCell>{brs.courseNum}</TableCell>
                            <TableCell>{brs.courseTitle}</TableCell>
                            <TableCell>{brs.teacher}</TableCell>
                            <TableCell>{brs.reporting}</TableCell>
                            <TableCell>{brs.attestation1}</TableCell>
                            <TableCell>{brs.attestation2}</TableCell>
                            <TableCell>{brs.attestation3}</TableCell>
                            <TableCell>{brs.average}</TableCell>
                            <TableCell>{brs.exam}</TableCell>
                            <TableCell>{brs.extra}</TableCell>
                            <TableCell>{brs.total}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            </Card>
        </div>
    )
}

export default BrsPage;
