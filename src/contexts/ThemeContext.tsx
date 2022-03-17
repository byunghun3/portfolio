import React, { FC, useState, createContext } from "react";

interface ThemeContextProps {
    isDarkMode: boolean
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};