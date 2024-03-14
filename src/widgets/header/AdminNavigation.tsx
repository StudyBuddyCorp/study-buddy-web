import { Button } from "@/shared/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu"
import { Link } from "react-router-dom";

const AdminNavigation = () => {

    return (
        <NavigationMenu>
            <NavigationMenuList >
                <NavigationMenuItem >
                    <NavigationMenuTrigger >Курсы</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col">
                        <Link to='/admin/create/course'><Button variant='link'>Создать курс</Button></Link>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem >
                    <NavigationMenuTrigger>Пользователи</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col">
                        <Link to='/admin/create/user'><Button variant='link'>Создать аккаунт</Button></Link>
                        <Link to='/admin/subscribe'><Button variant='link'>Подписать на курс</Button></Link>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default AdminNavigation;