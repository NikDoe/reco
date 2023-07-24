import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';

import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header
            data-testid='header'
            className={classNames(styles.Header, {}, [className])}
        >
            <Navbar />
        </header>
    );
};
