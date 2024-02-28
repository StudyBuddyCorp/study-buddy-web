import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { formSchema } from "./formSchema";
import { Input } from "@/shared/components/ui/input";
import FormButton from "./FormButton";
import { Button } from "@/shared/components/ui/button";
import { supabase } from "@/shared/lib/supabase";
import { Github } from "lucide-react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { authSlice } from "@/shared/store/reducers/UserSlice";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/shared/components/ui/scroll-area";


const AuthPage = () => {

    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.authReducer)
    const { handleSignIn } = authSlice.actions;
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
        document.title = "Вход"
    }, [navigate, user])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            state: 'REGISTER',
            email: '',
            password: '',
            passwordConfirmation: '',
            name: ''
        }
    })

    const state = form.watch('state')

    const handleState = () => {
        if (state === 'LOGIN') {
            form.setValue('state', 'REGISTER')
        } else {
            form.setValue('state', 'LOGIN')

        }
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { state, email, password, name } = values;
        if (state === 'LOGIN') {
            const response = await supabase.auth.signInWithPassword({
                email,
                password
            })
            dispatch(handleSignIn(response.data.user))
        } else {
            await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name,
                    }
                }
            })
        }
    }

    const handleGitHubAuth = async () => {
        await supabase.auth.signInWithOAuth({ provider: 'github' })
        const { data } = await supabase.auth.getUser()
        dispatch(handleSignIn(data.user))
    }

    return (
        <ScrollArea >
            <div className="    flex w-full h-screen justify-center items-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4 bg-card py-4 px-8 shadow-md rounded-md w-full sm:max-w-md">
                        <h3>Вход</h3>
                        <FormField control={form.control} name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Почта</FormLabel>
                                    <FormControl>
                                        <Input autoComplete="username" placeholder="email@mail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <Input autoComplete="password" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {state === 'REGISTER' &&
                            <>
                                <FormField control={form.control} name="passwordConfirmation"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Подтверждение пароля</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField control={form.control} name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Имя</FormLabel>
                                            <FormControl>
                                                <Input autoComplete="name" placeholder="Николай" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        }
                        <div className="flex flex-col gap-y-2">
                            <div className="mx-auto text-sm text-gray-700 darktext-gray-300">{state === 'LOGIN' ? "Еще нет аккаунта?" : "Уже есть аккаунт?"}<Button variant='link' type="button" onClick={handleState} >{state === 'LOGIN' ? "Создать" : "Войти"}</Button></div>
                            <FormButton state={state} />
                            {/* <span className="mx-auto text-sm">или</span> */}
                            <Button variant='outline' type="button" onClick={handleGitHubAuth}><Github /></Button>
                        </div>


                    </form>
                </Form>
            </div>
        </ScrollArea>
    )
}

export default AuthPage;