import Header from "@/widgets/header/Header";
import { Suspense } from "react";
import { useOutlet } from "react-router-dom";
import LoadingRoute from "./LoadingRoute";
import { useAuth } from "@/shared/hooks/useAuth";


const Layout = () => {

    useAuth()
    const outlet = useOutlet()

    return (
        <main>
            <Header />
            <Suspense fallback={<LoadingRoute />}>
                {outlet}
            </Suspense>
        </main>
    )
}

export default Layout;

