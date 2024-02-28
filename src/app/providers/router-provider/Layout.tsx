import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
import { Suspense, useEffect } from "react";
import { useOutlet } from "react-router-dom";
import LoadingRoute from "./LoadingRoute";
import { useAppDispatch } from "@/shared/store";
import { supabase } from "@/shared/lib/supabase";
import { authSlice } from "@/shared/store/reducers/UserSlice";

const getSession = async () => {

    const { data } = await supabase.auth.getUser()
    return data;

}


const Layout = () => {

    const dispatch = useAppDispatch()
    const { handleSignIn } = authSlice.actions;

    const outlet = useOutlet()

    useEffect(() => {
        getSession().then((res) => dispatch(handleSignIn(res.user)))
    }, [dispatch, handleSignIn])

    return (
        <main>
            <Header />
            <Suspense fallback={<LoadingRoute />}>
                {outlet}
            </Suspense>
            <Footer />
        </main>
    )
}

export default Layout;

