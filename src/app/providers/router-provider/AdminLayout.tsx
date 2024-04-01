import { Role } from "@/entities/user/IUser";
// import AdminNavigation from "@/widgets/header/AdminNavigation";
import { useAppSelector } from "@/shared/store";
import { useOutlet } from "react-router-dom";

const AdminLayout = () => {
    const { user } = useAppSelector(state => state.authReducer)

    const outlet = useOutlet()

    if (user && user.role !== Role.ADMIN) {
        return (
            <div>
                У вас нет доступа к админ панели
            </div>
        )
    }
    return (
        <div className="w-full flex flex-col gap-y-4 justify-center items-center">
            {/* <AdminNavigation /> */}
            {outlet}
        </div>
    )
}

export default AdminLayout;