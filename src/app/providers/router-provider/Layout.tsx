import Header from "@/widgets/header/Header";
import { Suspense } from "react";
import { useOutlet } from "react-router-dom";
import LoadingRoute from "./LoadingRoute";


const Layout = () => {

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

