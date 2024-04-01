import Header from "@/widgets/header/Header";
import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import LoadingRoute from "./LoadingRoute";
import { useAuth } from "@/shared/hooks/useAuth";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import AdminSidebar from "@/widgets/admin/AdminSidebar";


const Layout = () => {

    useAuth()
    const location = useLocation()
    const outlet = useOutlet()
 
    return (
        <div className="h-dvh flex flex-col">
            <Header />
            {location.pathname.includes('admin') && <AdminSidebar/>}
            <Suspense fallback={<LoadingRoute />}>
                <main className="mx-auto w-full h-full max-w-7xl py-8 flex flex-col gap-y-8 flex-grow">
                    <SwitchTransition>
                        <CSSTransition
                            key={location.pathname}
                            timeout={300}
                            classNames={'page'}
                            unmountOnExit
                        >
                            {() => (
                                <div className="w-full h-full">
                                    {outlet}
                                </div>
                            )}
                        </CSSTransition>
                    </SwitchTransition>
                </main>
            </Suspense>
        </div>
    )
}

export default Layout;

