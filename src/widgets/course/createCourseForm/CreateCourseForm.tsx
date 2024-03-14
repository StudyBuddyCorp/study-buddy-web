import { Form, FormControl, FormField, FormItem, FormMessage } from "@/shared/components/ui/form";
import { courseAPI } from "@/shared/store/services/CourseService";
import { Input } from "@/shared/components/ui/input";
import { SpinnerButton } from "@/shared/components/ui/SpinnerButton";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { useEffect } from "react";

const CreateCourseForm = () => {

    const [create, { isLoading }] = courseAPI.useCreateCourseMutation()

    useEffect(() => {
        document.title = "Создание курса"
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await create(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4 bg-card py-4 px-8 shadow-md rounded-md w-full sm:max-w-md">
                <h4>Создание курса</h4>
                <FormField control={form.control} name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input disabled={isLoading} autoComplete="title" placeholder="Название курса" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input autoComplete="description" disabled={isLoading} placeholder="Описание курса" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-y-2">
                    <SpinnerButton disabled={isLoading}>Создать курса</SpinnerButton>
                </div>
            </form>
        </Form>
    )
}

export default CreateCourseForm;