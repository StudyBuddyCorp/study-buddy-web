import { useAppSelector } from "@/shared/store";
import { ModeToggle } from "../../ui/mode-toggle";
import NavItem from "./NavItem";

const links = [
    {
        link: '/',
        children: 'Главная'
    }
]

const Header = () => {

    const {user} = useAppSelector(state => state.authReducer)

    return (
        <header className="relative flex justify-center items-center w-full min-h-4 bg-card p-4">
            <nav>
                <ul className="flex justify-center items-center">
                    {links.map(item => <NavItem key={item.link} link={item.link}>{item.children}</NavItem>)}
                    {!user && <NavItem link='/auth'>Войти</NavItem>}
                </ul>
            </nav>
            <div className="absolute right-2"><ModeToggle /></div>
        </header>
    )
}

export default Header;