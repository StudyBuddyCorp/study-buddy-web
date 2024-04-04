import { Book, School, Users } from "lucide-react";
import AdminSidebarItem from "./AdminSidebarItem";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";

const AdminSidebar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <button onMouseLeave={handleClose} onMouseEnter={handleOpen} className={cn("bg-card h-full p-4 absolute top-0 pt-16 z-10 left-0 overflow-hidden h- flex", isOpen && "bg-card/75 backdrop-blur-sm")}>
            <nav >
                <ul className="flex flex-col gap-y-4" >
                    <AdminSidebarItem to='/admin/course'><School />{isOpen ? 'Курсы' : ''}</AdminSidebarItem>
                    <AdminSidebarItem to='/admin/subscribe'><Users />{isOpen ? 'Студенты' : ''}</AdminSidebarItem>
                    <AdminSidebarItem to='/admin/teachers'><Book /> {isOpen ? 'Преподаватели' : ''}</AdminSidebarItem>
                </ul>
            </nav>
        </button>
    )
}

export default AdminSidebar;