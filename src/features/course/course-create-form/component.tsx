import { Form, FormControl, FormField, FormItem, FormMessage } from "@/shared/components/ui/form";
import { courseAPI } from "@/shared/store/services/CourseService";
import { Input } from "@/shared/components/ui/input";
import { SpinnerButton } from "@/shared/components/ui/SpinnerButton";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";

const CourseCreateForm = () => {

    const { t } = useTranslation()
    const [create, { isLoading }] = courseAPI.useCreateCourseMutation()

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
        <Card className="w-full  min-w-fit">
            <CardHeader>
                <h3>{t('course.create-form.header')}</h3>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4 w-full">
                        <FormField control={form.control} name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input disabled={isLoading} autoComplete="title" placeholder={t('course.create-form.title')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input autoComplete="description" disabled={isLoading} placeholder={t('course.create-form.description')} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col gap-y-2">
                            <SpinnerButton disabled={isLoading}>{t('course.create-form.save')}</SpinnerButton>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>

    )
}

export default CourseCreateForm;