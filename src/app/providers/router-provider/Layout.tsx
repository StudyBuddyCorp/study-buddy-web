import Header from "@/widgets/header/Header";
import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import LoadingRoute from "./LoadingRoute";
import { useAuth } from "@/shared/hooks/useAuth";
import { CSSTransition, SwitchTransition } from "react-transition-group";


const Layout = () => {

    useAuth()
    const location = useLocation()
    const outlet = useOutlet()

    return (
        <>
            <Header />
            {/* {location.pathname.includes('admin') && <AdminSidebar />} */}
            <div className="h-dvh flex flex-col">
                <Suspense fallback={<LoadingRoute />}>
                    <main className="mx-auto w-full pt-20 pb-4 h-full flex flex-col gap-y-8 flex-grow">
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
        </>
    )
}

export default Layout;

