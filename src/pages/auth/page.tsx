import { Form, FormControl, FormField, FormItem, FormMessage } from "@/shared/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { Input } from "@/shared/components/ui/input";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAPI } from "@/shared/store/services/UserService";
import * as z from "zod";
import SpinnerButton from "@/shared/components/ui/SpinnerButton";


const AuthPage = () => {

    const [login, { isLoading }] = userAPI.useLoginMutation()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Вход"
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { email, password } = values;
        await login({ email, password })
            .then(() => navigate('/'));
    }

    return (
        <div className="    flex w-full h-screen justify-center items-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4 bg-card py-4 px-8 shadow-md rounded-md w-full sm:max-w-md">
                    <h3>Вход</h3>
                    <FormField control={form.control} name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input disabled={isLoading} placeholder="Электронная почта или номер телефон" autoComplete="username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input disabled={isLoading} placeholder="Пароль" autoComplete="password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col gap-y-2">
                        <div className="mx-auto my-2 text-sm text-gray-700 darktext-gray-300">Еще нет аккаунта? <Link className='text-primary underline-offset-4 hover:underline' to='/registration'>Создать</Link></div>
                        <SpinnerButton disabled={isLoading}>Войти</SpinnerButton>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default AuthPage;