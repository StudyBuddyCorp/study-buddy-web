import { useAppDispatch, useAppSelector } from "@/shared/store";
import { ModeToggle } from "../../ui/mode-toggle";
import NavItem from "./NavItem";
import { Button } from "../../ui/button";
import { supabase } from "@/shared/lib/supabase";
import { authSlice } from "@/shared/store/reducers/UserSlice";

const links = [
    {
        link: '/',
        children: 'Главная'
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