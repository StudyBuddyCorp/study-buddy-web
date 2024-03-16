import { IUser } from "@/entities/user/IUser"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table"
import { userAPI } from "@/shared/store/services/UserService"
import { Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

const UserTable = () => {

    const [students, setStudents] = useState<IUser[]>([])
    const { data, isLoading } = userAPI.useGetStudentsQuery()

    useEffect(() => {
        if (data?.students) {
            setStudents(data?.students)
        }
    }, [data?.students])

    if (isLoading) {
        return (
            <div className="w-full flex justify-center items-center">
                <Loader2 className="animate-spin" />
            </div>
        )
    }
    return (
        <Table className="bg-card shadow-sm rounded-md">
            <TableHeader>
                <TableHead>Имя</TableHead>
                <TableHead>Почта</TableHead>
                <TableHead>Факультет</TableHead>
                <TableHead>Специальность</TableHead>
                <TableHead>Группа</TableHead>
            </TableHeader>
            <TableBody>
                {students.map(student =>
                    <TableRow key={student.id}>
                        <TableCell className="font-semibold">{student.name}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.department.title}</TableCell>
                        <TableCell>{student.speciality.title}</TableCell>
                        <TableCell>{student.group.group}</TableCell>

                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default UserTable;