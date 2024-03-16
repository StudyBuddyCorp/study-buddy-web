import { Settings } from "lucide-react";

const SettingsPage = () => {

    return (
        <div className="w-full flex flex-col gap-y-4 justify-center items-center mt-8">
            <Settings size={100} />
            <h1>Пока что нечего настраивать</h1>
        </div>
    )
}

export default SettingsPage;