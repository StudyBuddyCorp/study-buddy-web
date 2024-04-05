import { Course } from "@/entities/course";
import { Button } from "@/shared/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/shared/components/ui/command";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { UseFormReturn } from "react-hook-form";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/shared/lib/utils";
import { CommandList } from "cmdk";
import { useTranslation } from "react-i18next";

interface Props {
    form: UseFormReturn<{
        studentId: string;
        courseId: string;
    }, undefined>,
    courses: Course[]
}

const SelectCourseField = ({ form, courses }: Props) => {

    const { t } = useTranslation()

    return (
        <FormField
            control={form.control}
            name="courseId"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>
                        {t('student.subscribe-card.form.select-course.label')}
                    </FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-full justify-between",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value
                                        ? courses.find(
                                            (course) => course.id === field.value
                                        )?.title
                                        : t('student.subscribe-card.form.select-course.default-value')}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                            <Command>
                                <CommandInput
                                    placeholder={t('student.subscribe-card.form.select-course.search')}
                                    className="h-9"
                                />
                                <CommandEmpty>{t('student.subscribe-card.form.select-course.empty-value')}</CommandEmpty>
                                <CommandList>
                                    <CommandGroup>
                                        {courses.map(course => (
                                            <CommandItem
                                                value={course.id}
                                                key={course.id}
                                                onSelect={() => {
                                                    form.setValue("courseId", course.id)
                                                }}
                                            >
                                                {course.title}
                                                <CheckIcon
                                                    className={cn(
                                                        "ml-auto h-4 w-4",
                                                        course.id === field.value
                                                            ? "opacity-100"
                                                            : "opacity-0"
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
    )
}

export default SelectCourseField;