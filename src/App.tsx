import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";

import "./index.scss";

const App = () => {
  return (
    <>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О Нас</Link>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
