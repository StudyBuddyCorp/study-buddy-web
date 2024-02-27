import { useOutlet } from "react-router-dom";

const Layout = () => {

    const outlet = useOutlet()

    return (
        <main>
            {outlet}
        </main>
    )
}

export default Layout;