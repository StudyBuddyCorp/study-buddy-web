import { supabase } from "@/shared/lib/supabase";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const ProfilePage = () => {

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        document.title = 'Профиль'
        supabase.auth.getUser().then(res => setUser(res.data.user))
    }, [])

    return (
        <div className="fixed flex justify-center items-center w-full pt-4">
            <div className="bg-card p-8 flex flex-col gap-y-4 shadow-md rounded-md">
                <div>{user?.email}</div>
                <div>{user?.user_metadata['name']}</div>
            </div>
        </div>
    )
}

export default ProfilePage;