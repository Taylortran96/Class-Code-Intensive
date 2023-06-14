import { createContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    settheme: () => {},
});

export default ThemeContext;