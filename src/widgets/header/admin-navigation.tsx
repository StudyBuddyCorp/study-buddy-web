import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/shared/components/ui/navigation-menu';

const AdminNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Link to='/admin/course'>Курсы</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Курсы</NavigationMenuTrigger>
          <NavigationMenuContent className='flex flex-col'>
            <Link to='/admin/create/course'>
              <Button variant='link'>Создать курс</Button>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Пользователи</NavigationMenuTrigger>
          <NavigationMenuContent className='flex flex-col'>
            <Link to='/admin/create/user'>
              <Button variant='link'>Создать аккаунт</Button>
            </Link>
            <Link to='/admin/subscribe'>
              <Button variant='link'>Подписать на курс</Button>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AdminNavigation;
