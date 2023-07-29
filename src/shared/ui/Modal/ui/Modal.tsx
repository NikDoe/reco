import { FC, ReactNode, useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Portal } from '@/shared/ui/Portal';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/Button';

import CloseIcon from 'shared/assets/icons/close-btn.svg';

import styles from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const { 
        children,
        className,
        isOpen,
        onClose
    } = props;

    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
    };

    const closeHandler = useCallback(() => {
        if(onClose) onClose();
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') closeHandler();
    }, [closeHandler]);

    useEffect(() => {
        if(isOpen) window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className, theme])}>
                <div 
                    className={styles.overlay}
                    onClick={closeHandler}
                >
                    <div 
                        className={styles.content}
                        onClick={onContentClick}
                    >
                        <Button 
                            className={styles.button}
                            theme={ButtonTheme.ROUNDED}
                            onClick={closeHandler}
                        >
                            <CloseIcon />
                        </Button>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};