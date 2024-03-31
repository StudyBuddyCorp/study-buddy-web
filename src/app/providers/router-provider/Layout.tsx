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
        </>
    )
}

export default Layout;

