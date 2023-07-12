import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

import "./index.scss";

const App = () => {
  return (
    <>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О Нас</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
