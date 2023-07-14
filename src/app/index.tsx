import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Header } from "widgets/Header";
import { Button } from "shared/ui/Button";

import "./styles/index.scss";

const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Button onClick={toogleTheme}>тема</Button>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
