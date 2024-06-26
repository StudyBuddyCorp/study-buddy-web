import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Role } from '@/entities/user';
import { Input } from '@/shared/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useGetDepartmentQuery } from '@/shared/store/services/department-service';
import { useGetGroupsQuery } from '@/shared/store/services/group-service';
import { useGetSpecialtyQuery } from '@/shared/store/services/specialty-service';
import { useGetUsersQuery } from '@/shared/store/services/user-service';

export const UserTable = () => {
  const [department, setDepartment] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [groupId, setGroupId] = useState('');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const { data: departments } = useGetDepartmentQuery();
  const { data: specialties, refetch: refetchSpecialties } =
    useGetSpecialtyQuery(department);
  const { data: groups, refetch: refetchGroups } = useGetGroupsQuery({
    department,
    specialty,
  });
  const {
    data: students,
    isLoading,
    isFetching,
  } = useGetUsersQuery({
    role: Role.STUDENT,
    name: debouncedSearch,
    department,
    specialty,
    groupId,
  });

  useEffect(() => {
    setSpecialty('');
    setGroupId('');
    refetchSpecialties();
  }, [department, refetchSpecialties]);

  useEffect(() => {
    setGroupId('');
    refetchGroups();
  }, [refetchGroups, specialty]);

  if (isLoading) {
    return (
      <div className='w-full flex justify-center items-center'>
        <Loader2 className='animate-spin' />
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className='flex gap-x-4'>
        <Input
          placeholder='Найти'
          onChange={handleInputChange}
        />
        <Select onValueChange={value => setDepartment(value)}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Факультет' />
          </SelectTrigger>
          <SelectContent>
            {departments?.map(dep => (
              <SelectItem
                key={dep}
                value={dep}>
                {dep}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          disabled={!department}
          onValueChange={value => setSpecialty(value)}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Специальность' />
          </SelectTrigger>
          <SelectContent>
            {specialties?.map(specialty => (
              <SelectItem
                key={specialty}
                value={specialty}>
                {specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          disabled={!specialty}
          onValueChange={value => setGroupId(value)}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Группа' />
          </SelectTrigger>
          <SelectContent>
            {groups?.map(group => (
              <SelectItem
                key={group.id}
                value={group.id}>
                {group.number}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Table className='bg-card shadow-sm rounded-md'>
        <TableHeader>
          <TableHead>Имя</TableHead>
          <TableHead>Почта</TableHead>
          <TableHead>Факультет</TableHead>
          <TableHead>Специальность</TableHead>
          <TableHead>Группа</TableHead>
        </TableHeader>
        <TableBody className='relative min-h-20'>
          {students?.map(student => (
            <TableRow key={student.id}>
              <TableCell className='font-semibold'>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.departmentTitle}</TableCell>
              <TableCell>{student.specialityTitle}</TableCell>
              <TableCell>{student.groupNumber}</TableCell>
            </TableRow>
          ))}
          {isFetching && (
            <div className='w-full h-full flex justify-center items-center bg-card/70 absolute inset-0'>
              <Loader2 className='animate-spin' />
            </div>
          )}
        </TableBody>
      </Table>
      {!students?.length && (
        <h3 className='w-full text-center p-8'>Студенты не найдены</h3>
      )}
    </>
  );
};
