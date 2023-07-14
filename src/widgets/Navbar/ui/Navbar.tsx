import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <h1>LOGO</h1>
      <AppLink to='/'>Главная</AppLink>
      <AppLink to='/about'>О Нас</AppLink>
    </div>
  );
};
