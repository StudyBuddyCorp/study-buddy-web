import { Shield } from "lucide-react";

const AdminPage = () => {

    return (
        <div className="w-full flex flex-col gap-y-4 justify-center items-center pt-8">            
            <div className="w-full h-80 flex justify-center flex-col items-center gap-12">
                <Shield className="w-full" size={100} />
                <h1>Добро пожаловать в Админ панель</h1>
            </div>
        </div>
    )
}

export default AdminPage;