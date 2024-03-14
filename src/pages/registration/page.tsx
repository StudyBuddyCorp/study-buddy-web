import { Form, FormControl, FormField, FormItem, FormMessage } from "@/shared/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { formSchema } from "./formSchema";
import { Input } from "@/shared/components/ui/input";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAPI } from "@/shared/store/services/UserService";
import SpinnerButton from "@/shared/components/ui/SpinnerButton";


const RegistrationPage = () => {

    const [registration, {isLoading}] = userAPI.useRegistrationMutation()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Регистрация"
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
            name: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const {email, password, name} = values;
        await registration({email, password, name})
        .then(() => navigate('/'));

    }

    return (
        <div className="    flex w-full h-screen justify-center items-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4 bg-card py-4 px-8 shadow-md rounded-md w-full sm:max-w-md">
                    <h3>Регистрация</h3>
                    <FormField control={form.control} name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input disabled={isLoading} autoComplete="username" placeholder="Электронная почта или номер телефон" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input disabled={isLoading} placeholder="Пароль" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="passwordConfirmation"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input disabled={isLoading} type="password" placeholder="Подтверждение пароля" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input disabled={isLoading} autoComplete="name" placeholder="Имя" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col gap-y-2">
                        <div className="my-2 mx-auto text-sm text-gray-700 darktext-gray-300">Уже есть аккаунт? <Link className='text-primary underline-offset-4 hover:underline' to='/auth'>Войти</Link></div>
                        <SpinnerButton disabled={isLoading}>Создать аккаунт</SpinnerButton>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default RegistrationPage;