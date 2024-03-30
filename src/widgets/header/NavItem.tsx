import { NavLink } from "react-router-dom";
import { FC, ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface NavItemProps {
    link: string,
    children: ReactNode
}

const NavItem: FC<NavItemProps> = ({ link, children }) => {

    return (
        <li>
            <NavLink className={({ isActive }) => cn("px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline", isActive && "bg-primary text-primary-foreground")} to={link}>{children} </NavLink>
        </li>
    )
}

export default NavItem;