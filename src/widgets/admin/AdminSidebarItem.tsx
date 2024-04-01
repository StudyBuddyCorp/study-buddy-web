import { cn } from "@/shared/lib/utils";
import { memo } from "react";
import { NavLink } from "react-router-dom";

interface Props extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    to: string
}

const AdminSidebarItem = memo((props: Props) => {

    return (
        <li {...props}>
            <NavLink className={({ isActive }) => cn('flex overflow-hidden gap-x-4 w-full p-4 bg-card text-card-foreground/60 hover:text-card-foreground transition-all duration-200', isActive && 'rounded-xl bg-card-foreground text-card hover:text-card')} to={props.to}>
                {props.children}
            </NavLink>
        </li>
    )
})

export default AdminSidebarItem;