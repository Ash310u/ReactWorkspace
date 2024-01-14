import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        // Anytime you add a EventListener to the window object, you always make sure you add up a cleanup function.
        window.addEventListener('popstate', handler)
        
        return () => {
            window.removeEventListener('popstate', handler)
        }
    },[])

    return <NavigationContext.Provider value={{}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider }
export default NavigationContext