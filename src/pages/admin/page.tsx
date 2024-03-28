import { Shield } from "lucide-react";

const AdminPage = () => {

    return (
        <div className="mt-20 flex flex-col gap-2 text-primary">
            <Shield className="w-full" size={100} />
            <h1>Добро пожаловать в Админ панель</h1>
        </div>
    )
}

export default AdminPage;