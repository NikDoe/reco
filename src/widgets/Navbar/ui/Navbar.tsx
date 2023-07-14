import { classNames } from "shared/lib/classNames/classNames";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <AppLink to='/'>Главная</AppLink>
      <AppLink to='/about'>О Нас</AppLink>
    </div>
  );
};
