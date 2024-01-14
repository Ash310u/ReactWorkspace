import { useContext } from "react"
import NavigationContext from "../context/navigation"

const Link = ({ to, children }) => {
    const { navigate } = useContext(NavigationContext);

    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault()
        
        navigate(to)
    }
    return <a href={to} onClick={handleClick}>{children}</a>
}

export default Link;