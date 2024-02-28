import { useAppDispatch, useAppSelector } from "@/shared/store";
import { ModeToggle } from "../../shared/components/ui/mode-toggle";
import NavItem from "./NavItem";
import { Button } from "../../shared/components/ui/button";
import { supabase } from "@/shared/lib/supabase";
import { authSlice } from "@/shared/store/reducers/UserSlice";
import { ReactNode } from "react";

type Link = { link: string, children: ReactNode }

const links: Link[] = [
    {
        link: '/',
        children: 'Главная'
    },
    {
        link: '/profile',
        children: 'Профиль'
    }
]

const Header = () => {

    const { user } = useAppSelector(state => state.authReducer)
    const { handleSignOut } = authSlice.actions
    const dispatch = useAppDispatch()

    const signOut = async () => {
        await supabase.auth.signOut()
        dispatch(handleSignOut())
    }

    return (
        <header className="relative flex justify-center items-center w-full min-h-4 bg-card p-4">
            <nav>
                <ul className="flex justify-center items-center">
                    {links.map(item => <NavItem key={item.link} link={item.link}>{item.children}</NavItem>)}
                    {user ? <Button variant="link" onClick={signOut}>Выйти</Button> : <NavItem link='/auth'>Войти</NavItem>}
                </ul>
            </nav>
            <div className="absolute right-2"><ModeToggle /></div>
        </header>
    )
}

export default Header;