import { Role } from "@/entities/user/IUser";
import { Button } from "@/shared/components/ui/button";
import { useAppSelector } from "@/shared/store";
import { userAPI } from "@/shared/store/services/UserService";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {

    const { user } = useAppSelector(state => state.authReducer)
    const [logout, { isLoading }] = userAPI.useLogoutMutation()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Профиль'
    }, [])

    const handleSignOut = async () => {
        navigate('/auth')
        await logout()
    }

    return (
        <div className=" flex justify-center items-center w-full pt-4 max-h-dvh">
            {user ?
                <div className="md:max-w-xl w-full flex flex-col gap-y-4">
                    <div className="w-full relative rounded-lg">
                        {/* <img className="relative rounded-lg" src={user.imageUrl} alt='Avatar' /> */}
                        <h3 className="z-10 absolute bottom-4 left-4 text-white font-bold text-3xl">{user.name}</h3>
                    </div>
                    <div className="font-semibold rounded-md shadow-md p-4 bg-card">
                        <ul>
                            {user.email && <li className="flex gap-x-4 items-center">Почта: <p className="underline-offset-4 underline text-accent">{user.email}</p></li>}
                            {/* {user.phone && <li className="flex gap-x-4 items-center">Телефон: <p className="underline-offset-4 underline text-accent">{user.phone}</p></li>} */}
                        </ul>
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                        {user.role === Role.ADMIN && <Link className="w-full" to='/admin/course'><Button className="w-full" disabled={isLoading}>Админ панель</Button></Link>}
                        <Button disabled={isLoading} size='sm' variant='destructive' onClick={handleSignOut}>Выйти</Button>
                    </div>
                </div>
                :
                <div className="mt-8 bg-card flex flex-col gap-y-4 p-4 items-center justify-center rounded-md shadow-md">
                    <h3>Чтобы увидеть свой профиль войдите в аккаунт</h3>
                    <Button size='lg' variant='link'><Link to='/auth'>Войти</Link></Button>
                </div>
            }

        </div>
    )
}

export default ProfilePage;