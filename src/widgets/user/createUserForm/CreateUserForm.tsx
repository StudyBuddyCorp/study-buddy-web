import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/shared/components/ui/form";
import { courseAPI } from "@/shared/store/services/CourseService";
import { Input } from "@/shared/components/ui/input";
import { SpinnerButton } from "@/shared/components/ui/SpinnerButton";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { useEffect, useState } from "react";
import { specialtyAPI } from "@/shared/store/services/SpecialtyService";
import { departmentAPI } from "@/shared/store/services/DepartmentService";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/shared/components/ui/command";
import { Department } from "@/entities/department/Department";
import { Specialty } from "@/entities/specialty/Specialty";
import { Check, ChevronsUpDown } from "lucide-react";
import { userAPI } from "@/shared/store/services/UserService";

const CreateUserForm = () => {

    // const [create, { isLoading }] = courseAPI.useCreateCourseMutation()
    const [disabled, setDisabled] = useState(false)
    const [departments, setDepartments] = useState<Department[] | undefined>(undefined)
    const [specialties, setSpecialties] = useState<Specialty[] | undefined>(undefined)
    
    const [create, {isLoading: isCreateLoading}] = userAPI.useCreateStudentMutation()
    const { data: specialtiesResponse, isLoading: isSpecialtiesLoading } = specialtyAPI.useGetSpecialtyQuery()
    const { data: departmentsResponse, isLoading: isDepartmentsLoadings } = departmentAPI.useGetDepartmentQuery()

    useEffect(() => {
        setDisabled(
            isSpecialtiesLoading ||
            isDepartmentsLoadings ||
            isCreateLoading
        )
    }, [isCreateLoading, isDepartmentsLoadings, isSpecialtiesLoading])

    useEffect(() => {
        setDepartments(departmentsResponse?.departments)
    }, [departmentsResponse?.departments])

    useEffect(() => {
        setSpecialties(specialtiesResponse?.specialties)
    }, [specialtiesResponse?.specialties])

    useEffect(() => {
        document.title = "Создание аккаунта пользователя"
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            department: '',
            specialty: '',
            group: 0
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await create(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4 bg-card py-4 px-8 shadow-md rounded-md w-full sm:max-w-md">
                <h4>Создание аккаунта студента</h4>
                <FormField control={form.control} name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input disabled={disabled} autoComplete="name" placeholder="Имя студента" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input autoComplete="email" disabled={disabled} type="email" placeholder="Почта студента" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-auto justify-between",
                                                !field.value && "text-muted-foreground font-normal"
                                            )}
                                        >
                                            {field.value
                                                ? departments?.find(department => department.title === field.value)?.title
                                                : "Факультет"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Найти тип..." />
                                        <CommandEmpty>Тип не найден</CommandEmpty>
                                        <CommandGroup>
                                            {departments?.map((department) => (
                                                <CommandItem
                                                    value={department.title}
                                                    key={department.title}
                                                    onSelect={() => {
                                                        form.setValue("department", department.title)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            department.title === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {department.title}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="specialty"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-auto justify-between",
                                                !field.value && "text-muted-foreground font-normal"
                                            )}
                                        >
                                            {field.value
                                                ? specialties?.find(specialty => specialty.title === field.value)?.title
                                                : "Специальность"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Найти тип..." />
                                        <CommandEmpty>Тип не найден</CommandEmpty>
                                        <CommandGroup>
                                            {specialties?.map((specialty) => (
                                                <CommandItem
                                                    value={specialty.title}
                                                    key={specialty.title}
                                                    onSelect={() => {
                                                        form.setValue("specialty", specialty.title)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            specialty.title === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {specialty.title}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="group"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input autoComplete="group" disabled={disabled} type="number" placeholder="Группа" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-y-2">
                    <SpinnerButton disabled={disabled}>Создать аккаунт</SpinnerButton>
                </div>
            </form>
        </Form>
    )
}

export default CreateUserForm;