import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {






    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode)
    }






    const [Cart,setCart] = useState ([]);

    return (
        <ThemeContext.Provider value = {{
             

        }}>

            {children}

        </ThemeContext.Provider>
    )
}

export default ThemeProvider


