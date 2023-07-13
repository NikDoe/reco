import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

import "./styles/index.scss";

const App = () => {
  const { theme, toogleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О Нас</Link>
      <button onClick={toogleTheme}>TOOGLE</button>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
