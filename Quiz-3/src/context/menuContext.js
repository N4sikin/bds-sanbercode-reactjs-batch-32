import { createContext, useState } from "react";

export const MenuContext = createContext()

export const MenuProvider = props => {

    const [activeMenu, setActiveMenu] = useState(0)
    const [search, setSearch] = useState('')

    return (
        <MenuContext.Provider value={{
            activeMenu,
            setActiveMenu,
            search,
            setSearch
        }}>
            {props.children}
        </MenuContext.Provider>
    )
}