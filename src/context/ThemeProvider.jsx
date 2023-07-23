import { createContext, useState } from "react";

export const themeContext = createContext()

export default function ThemeProvider(props){
    const[darkMode,setDarkMode] = useState(false)

    function toggleTheme(){
        setDarkMode(!darkMode)
    }

    if(darkMode){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }

    return(
        <themeContext.Provider value={{toggleTheme, darkMode}}>
           {props.children}
        </themeContext.Provider>
    )
}