import { useAppSelector } from "@/shared/store";
import { ModeToggle } from "../../shared/components/ui/mode-toggle";
import NavItem from "./NavItem";
import { Button } from "../../shared/components/ui/button";
import { ReactNode, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
        link: '/profile',
        children: <User />
    },
]

const Header = () => {

    const [showNav, setShowNav] = useState(false)
    const { isAuthenticated } = useAppSelector(state => state.authReducer)

    useEffect(() => {
        setShowNav(isAuthenticated)
    }, [isAuthenticated])

    return (
        <header className="absolute h-full max-h-14 w-full min-h-4 bg-card p-2 pr-4">
            <nav className="flex justify-end">
                <ul className="flex justify-evenly gap-2 items-center">
                    {showNav && links.map(item => <NavItem key={item.link} link={item.link}>{item.children}</NavItem>)}
                    {!showNav && <NavLink to='/auth'><Button variant='secondary'>Войти</Button></NavLink>}
                    <li><ModeToggle /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;