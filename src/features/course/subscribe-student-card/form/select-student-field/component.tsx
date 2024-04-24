import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { Button } from '@ui/button';
import { cn } from '@/shared/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shared/components/ui/command';
import { User } from '@/entities/user';

interface Props {
  form: UseFormReturn<
    {
      studentId: string;
      courseId: string;
    },
    undefined
  >;
  students: User[];
}

const SelectStudentField = ({ form, students }: Props) => {
  const { t } = useTranslation();

  return (
    <FormField
      control={form.control}
      name='studentId'
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>
            {t('student.subscribe-card.form.select-student.label')}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant='outline'
                  className={cn(
                    'w-full justify-between',
                    !field.value && 'text-muted-foreground',
                  )}>
                  {field.value
                    ? students.find(student => student.id === field.value)?.name
                    : t(
                      'student.subscribe-card.form.select-student.default-value',
                    )}
                  <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-full p-0'>
              <Command>
                <CommandInput
                  placeholder={t(
                    'student.subscribe-card.form.select-student.search',
                  )}
                  className='h-9'
                />
                <CommandEmpty>
                  {t('student.subscribe-card.form.select-student.empty-value')}
                </CommandEmpty>
                <CommandList>
                  <CommandGroup>
                    {students.map(student => (
                      <CommandItem
                        value={student.id}
                        key={student.id}
                        onSelect={() => {
                          form.setValue('studentId', student.id);
                        }}>
                        {student.name}
                        <CheckIcon
                          className={cn(
                            'ml-auto h-4 w-4',
                            student.id === field.value
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
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
  );
};

export { SelectStudentField };
