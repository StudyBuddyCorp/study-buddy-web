import { useEffect } from "react";

const ProfilePage = () => {


    useEffect(() => {
        document.title = 'Профиль'
    }, [])

    return (
        <div className=" flex justify-center items-center w-full pt-4 max-h-dvh">
            <div className="bg-card md:max-w-3xl w-full p-8 flex flex-col gap-y-4 shadow-md rounded-md">
        
            </div>
        </div>
    )
}

export default ProfilePage;