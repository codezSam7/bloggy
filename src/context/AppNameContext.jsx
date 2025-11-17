import { createContext, useContext, useState } from "react";

const AppNameContext = createContext();

const AppNameProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    return (
        <AppNameContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppNameContext.Provider>
    )

}

export { AppNameContext, AppNameProvider }