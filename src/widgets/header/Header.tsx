import { useAppSelector } from "@/shared/store";
import { ModeToggle } from "../../shared/components/ui/mode-toggle";
import NavItem from "./NavItem";
import { Button } from "../../shared/components/ui/button";
import { ReactNode, useEffect, useState } from "react";
import { userAPI } from "@/shared/store/services/UserService";
import { NavLink, useNavigate } from "react-router-dom";
import { User } from "lucide-react";

type Link = { link: string, children: ReactNode }

const links: Link[] = [
    {
        link: '/',
        children: 'Главная'
    },
    {
        link: '/brs',
        children: 'БРС'
    },
    {
        link: '/schedule',
        children: 'Расписание'
    },
    {
        link: '/settings',
        children: 'Настройки'
    },
]

const Header = () => {

    const [showNav, setShowNav] = useState(false)
    const { isAuthenticated } = useAppSelector(state => state.authReducer)

    useEffect(() => {
        setShowNav(isAuthenticated)
    }, [isAuthenticated])

    return (
        <header className="relative w-full min-h-4 bg-card p-4">
            <nav>
                <ul className="flex justify-end items-center">
                    {showNav &&
                        <>
                            {links.map(item => <NavItem key={item.link} link={item.link}>{item.children}</NavItem>)}
                            <NavLink to={'/profile'}><Button size='icon' variant='ghost'><User /></Button></NavLink>
                        </>
                    }
                    {!showNav && <NavLink to='/auth'><Button variant='secondary'>Войти</Button></NavLink>}
                    <li><ModeToggle /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;