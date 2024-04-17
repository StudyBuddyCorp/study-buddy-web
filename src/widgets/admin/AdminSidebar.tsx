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
        <div
            onMouseLeave={handleClose}
            onMouseEnter={handleOpen}
            className={cn(`
            bg-card
            h-screen max-w-fit p-4
            sticky top-10 left-0 z-10 overflow-hidden`,
                isOpen && "bg-card/75 backdrop-blur-sm")}>
            <nav>
                <ul className="flex flex-col gap-y-4" >
                    <AdminSidebarItem to='/admin/course'><School />{isOpen ? 'Курсы' : ''}</AdminSidebarItem>
                    <AdminSidebarItem to='/admin/subscribe'><Users />{isOpen ? 'Студенты' : ''}</AdminSidebarItem>
                    <AdminSidebarItem to='/admin/teachers'><Book /> {isOpen ? 'Преподаватели' : ''}</AdminSidebarItem>
                </ul>
            </nav>
        </div>
    )
}

export default AdminSidebar;