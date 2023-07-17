import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Header } from 'widgets/Header';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <ThemeSwitcher />
                <LangSwitcher />
                <Header />
                <div className='page-content'>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
