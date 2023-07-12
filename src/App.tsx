import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toogleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О Нас</Link>
      <button onClick={toogleTheme}>TOOGLE</button>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
