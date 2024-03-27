import { Input } from "@/shared/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table"
import { useDebounce } from "@/shared/hooks/useDebounce"
import { useGetDepartmentQuery } from "@/shared/store/services/DepartmentService"
import { useGetGroupsQuery } from "@/shared/store/services/GroupService"
import { useGetSpecialtyQuery } from "@/shared/store/services/SpecialtyService"
import { useGetStudentsWithParamsQuery } from "@/shared/store/services/UserService"
import { Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

const UserTable = () => {

    const [department, setDepartment] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [groupId, setGroup] = useState('')
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500)

    const { data: departments } = useGetDepartmentQuery()
    const { data: specialties, refetch: refetchSpecialties } = useGetSpecialtyQuery(department)
    const { data: groups, refetch: refetchGroups } = useGetGroupsQuery({ department, specialty })
    const { data: students, isLoading, isFetching } = useGetStudentsWithParamsQuery({ name: debouncedSearch, department, specialty, groupId })

    useEffect(() => {
        setSpecialty('')
        setGroup('')
        refetchSpecialties()
    }, [department, refetchSpecialties])

    useEffect(() => {
        setGroup('')
        refetchGroups()
    }, [refetchGroups, specialty])

    if (isLoading) {
        return (
            <div className="w-full flex justify-center items-center">
                <Loader2 className="animate-spin" />
            </div>
        )
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="flex gap-x-4">
                <Input onChange={handleInputChange} />
                <Select onValueChange={value => setDepartment(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Факультет" />
                    </SelectTrigger>
                    <SelectContent>
                        {departments?.map(dep => <SelectItem key={dep} value={dep} > {dep}</SelectItem>)}
                    </SelectContent>
                </Select >
                <Select onValueChange={value => setSpecialty(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Специальность" />
                    </SelectTrigger>
                    <SelectContent>
                        {specialties?.map(specialty => <SelectItem key={specialty} value={specialty} > {specialty}</SelectItem>)}
                    </SelectContent>
                </Select >
                <Select onValueChange={value => setGroup(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Группа" />
                    </SelectTrigger>
                    <SelectContent>
                        {groups?.map(group => <SelectItem key={group.id} value={group.id} >{group.number}</SelectItem>)}
                    </SelectContent>
                </Select >
            </div>
            <Table className="bg-card shadow-sm rounded-md">
                <TableHeader>
                    <TableHead>Имя</TableHead>
                    <TableHead>Почта</TableHead>
                    <TableHead>Факультет</TableHead>
                    <TableHead>Специальность</TableHead>
                    <TableHead>Группа</TableHead>
                </TableHeader>
                <TableBody className="relative min-h-20">
                    {students?.map(student =>
                        <TableRow key={student.id}>
                            <TableCell className="font-semibold">{student.name}</TableCell>
                            <TableCell>{student.email}</TableCell>
                            <TableCell>{student.department.title}</TableCell>
                            <TableCell>{student.specialty.title}</TableCell>
                            <TableCell>{student.group.number}</TableCell>

                        </TableRow>
                    )}
                    {isFetching && <div className="w-full h-full flex justify-center items-center bg-card/70 absolute inset-0"><Loader2 className="animate-spin" /></div>}
                    {!students?.length && <h5 className="w-full text-center">Студенты не найдены</h5>}
                </TableBody>
            </Table>
        </>
    )
}

export default UserTable;