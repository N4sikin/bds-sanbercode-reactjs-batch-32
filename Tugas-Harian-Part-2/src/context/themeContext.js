import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = props => {

    const [themeColor, setThemeColor] = useState('dark')
    const [activeMenu, setActiveMenu] = useState(0)

    return (
        <ThemeContext.Provider value={{
            themeColor,
            setThemeColor,
            activeMenu,
            setActiveMenu
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}