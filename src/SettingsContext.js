import { createContext, useState, useEffect } from "react";
const SettingsContext = createContext();

export function SettingsProvider({children}) {
    const [type, setType] = useState("Thobe");
    const [mode, setMode] = useState("light");
    const [theme, setTheme] = useState({primary: '#fff', secondary: '#000'});
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("Mode") !== null) {
            updateTheme(localStorage.getItem("Mode"));
        }
    }, [])

    const updateType = (value) => {
        setType(value);
    }


    const updateTheme = (value) => {
        if (value === "light") {
            setMode("light")
            setTheme({background: '#fff', primary: '#fff', text: '#28293D'})
            localStorage.setItem("Mode", "light")
        } else {
            setMode("dark")
            setTheme({background: '#28293D', primary: '#001', text: '#8F90A6'})
            localStorage.setItem("Mode", "dark")
        }
        
    }

    const addToCart = (value) => {
        setCart([...cart, value])
    }

    const removeItemFromCart = (value) => {
        setCart((prevState) =>
            prevState.filter((prevItem) => prevItem.name !== value)
        );
    }
    return(
        <SettingsContext.Provider value={{type, updateType, mode, theme, updateTheme, cart, addToCart, removeItemFromCart, setCart}}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext;