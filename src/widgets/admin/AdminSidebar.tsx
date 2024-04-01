import { Book, School, Users } from "lucide-react";
import AdminSidebarItem from "./AdminSidebarItem";
import { useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

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
                <button ref={nodeRef} onMouseLeave={handleClose} onMouseEnter={handleOpen} className="bg-card p-4 absolute top-[54px] left-0 overflow-hidden h-full flex">
                    <nav ref={nodeRef}>
                        <ul ref={nodeRef} className="flex flex-col gap-y-4" >
                            <AdminSidebarItem ref={nodeRef} to='/admin/course'><School />{isOpen ? 'Курсы' : ''}</AdminSidebarItem>
                            <AdminSidebarItem ref={nodeRef} to='/admin/subscribe'><Users />{isOpen ? 'Студенты' : ''}</AdminSidebarItem>
                            <AdminSidebarItem ref={nodeRef} to='/admin/teachers'><Book /> {isOpen ? 'Преподаватели' : ''}</AdminSidebarItem>
                        </ul>
                    </nav>
                </button>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default AdminSidebar;