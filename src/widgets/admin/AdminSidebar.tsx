import { Book, NotebookText, School, Users } from "lucide-react";
import AdminSidebarItem from "./AdminSidebarItem";
import { useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { cn } from "@/shared/lib/utils";

const AdminSidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const openRef = useRef(null);
    const closeRef = useRef(null);
    const nodeRef = isOpen ? openRef : closeRef;

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <SwitchTransition>
            <CSSTransition
                key={String(isOpen) ? 'true' : 'false'}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                classNames='courses'
                nodeRef={nodeRef}
            >
                <button ref={nodeRef} onMouseLeave={handleClose} onMouseEnter={handleOpen} className={cn("bg-card p-4 absolute top-0 pt-16 z-10 left-0 overflow-hidden h-dvh flex", isOpen && "bg-card/75 backdrop-blur-sm")}>
                    <nav ref={nodeRef}>
                        <ul ref={nodeRef} className="flex flex-col gap-y-4" >
                            <AdminSidebarItem ref={nodeRef} to='/admin/course'><School />{isOpen ? 'Курсы' : ''}</AdminSidebarItem>
                            <AdminSidebarItem ref={nodeRef} to='/admin/subscribe'><Users />{isOpen ? 'Студенты' : ''}</AdminSidebarItem>
                            <AdminSidebarItem ref={nodeRef} to='/admin/teachers'><Book /> {isOpen ? 'Преподаватели' : ''}</AdminSidebarItem>
                            <AdminSidebarItem ref={nodeRef} to='/admin/brs'><NotebookText /> {isOpen ? 'БРС' : ''}</AdminSidebarItem>
                        </ul>
                    </nav>
                </button>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default AdminSidebar;