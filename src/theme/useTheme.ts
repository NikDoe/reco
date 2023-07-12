import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeReturn {
  theme: Theme;
  toogleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {

  const { theme, setTheme } = useContext(ThemeContext)

  const toogleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }
  return { theme, toogleTheme }
}