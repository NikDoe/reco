import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Header } from "widgets/Header";

import "./styles/index.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <ThemeSwitcher />
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
