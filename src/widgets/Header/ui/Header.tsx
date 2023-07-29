import { classNames } from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';
import { useCallback, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { ButtonTheme } from '@/shared/ui/Button/Button';

import AuthIcon from 'shared/assets/icons/auth.svg';

import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const toggleModal = useCallback(() => {
        setIsAuthOpen(prev => !prev);
    }, []);

    return (
        <header
            data-testid='header'
            className={classNames(styles.Header, {}, [className])}
        >
            <h1>RECO</h1>
            <Navbar />
            <Button 
                theme={ButtonTheme.CLEAR}
                onClick={toggleModal}
            >
                <AuthIcon />
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthOpen} onClose={toggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit quidem molestiae aut! Vero deleniti ipsa veniam
                non molestiae magni minus, in autem possimus voluptate,
                porro excepturi culpa explicabo illum quisquam.
            </Modal>
        </header>
    );
};
