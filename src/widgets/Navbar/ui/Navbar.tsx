import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <AppLink to='/'>{t('Главная')}</AppLink>
            <AppLink to='/about'>{t('О Нас')}</AppLink>
        </div>
    );
};
