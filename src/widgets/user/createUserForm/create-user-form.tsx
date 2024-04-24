import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CommandList } from 'cmdk';
import * as z from 'zod';
import { createUserSchema } from './form-schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { SpinnerButton } from '@/shared/components/ui/SpinnerButton';

import { useGetSpecialtyQuery } from '@/shared/store/services/specialty-service';
import { useGetDepartmentQuery } from '@/shared/store/services/department-service';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/components/ui/popover';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/shared/components/ui/command';
import { useGetGroupsQuery } from '@/shared/store/services/group-service';
import { useCreateStudentMutation } from '@/shared/store/services/user-service';

const CreateUserForm = () => {
  const [disabled, setDisabled] = useState(false);

  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      department: '',
      specialty: '',
      group: '',
    },
  });

  const department = form.watch('department');
  const specialty = form.watch('specialty');

  const [create, { isLoading: isCreateLoading }] = useCreateStudentMutation();
  const { data: departments, isLoading: isDepartmentsLoadings } =
    useGetDepartmentQuery();
  const {
    data: specialties,
    isLoading: isSpecialtiesLoading,
    refetch: refetchSpecialties,
  } = useGetSpecialtyQuery(department);
  const {
    data: groups,
    isLoading: isGroupsLoading,
    refetch: refetchGroups,
  } = useGetGroupsQuery({ department, specialty });

  useEffect(() => {
    setDisabled(
      isSpecialtiesLoading || isDepartmentsLoadings || isGroupsLoading,
    );
  }, [isDepartmentsLoadings, isGroupsLoading, isSpecialtiesLoading]);

  useEffect(() => {
    refetchSpecialties();
  }, [department, refetchSpecialties]);

  useEffect(() => {
    refetchGroups();
  }, [specialty, refetchGroups]);

  const onSubmit = async (values: z.infer<typeof createUserSchema>) => {
    await create(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-y-4 bg-card py-4 px-8 shadow-md rounded-md w-full sm:max-w-md'>
        <h4>Создание аккаунта студента</h4>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={disabled}
                  autoComplete='name'
                  placeholder='Имя студента'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoComplete='email'
                  disabled={disabled}
                  type='email'
                  placeholder='Почта студента'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='department'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <Popover>
                <PopoverTrigger
                  disabled={disabled}
                  asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-auto justify-between',
                        !field.value && 'text-muted-foreground font-normal',
                      )}>
                      {field.value
                        ? departments?.find(
                          department => department === field.value,
                        )
                        : 'Факультет'}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                  <Command>
                    <CommandInput placeholder='Найти тип...' />
                    <CommandEmpty>Тип не найден</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {departments?.map(department => (
                          <CommandItem
                            value={department}
                            key={department}
                            onSelect={() => {
                              form.setValue('department', department);
                            }}>
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                department === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0',
                              )}
                            />
                            {department}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='specialty'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <Popover>
                <PopoverTrigger
                  disabled={!department || disabled}
                  asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-auto justify-between',
                        !field.value && 'text-muted-foreground font-light',
                      )}>
                      {department
                        ? field.value
                          ? specialties?.find(
                            specialty => specialty === field.value,
                          )
                          : 'Специальность'
                        : 'Сперва выберите факультет'}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                  <Command>
                    <CommandInput placeholder='Найти тип...' />
                    <CommandEmpty>Тип не найден</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {specialties?.map(specialty => (
                          <CommandItem
                            value={specialty}
                            key={specialty}
                            onSelect={() => {
                              form.setValue('specialty', specialty);
                            }}>
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                specialty === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0',
                              )}
                            />
                            {specialty}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='group'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <Popover>
                <PopoverTrigger
                  disabled={!department || !specialty || disabled}
                  asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-auto justify-between',
                        !field.value && 'text-muted-foreground font-light',
                      )}>
                      {specialty
                        ? field.value
                          ? groups?.find(group => group.id === field.value)
                            ?.number
                          : 'Группа'
                        : 'Сперва выберите специальность'}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                  <Command>
                    <CommandInput placeholder='Найти тип...' />
                    <CommandEmpty>Тип не найден</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {groups?.map(group => (
                          <CommandItem
                            value={group.id}
                            key={group.number}
                            onSelect={() => {
                              form.setValue('group', group.id);
                            }}>
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                group.id === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0',
                              )}
                            />
                            {group.number}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex flex-col gap-y-2'>
          <SpinnerButton disabled={isCreateLoading}>
            Создать аккаунт
          </SpinnerButton>
        </div>
      </form>
    </Form>
  );
};

export default CreateUserForm;
