import { useContext } from "react"
import { AppContext } from "../App"


export default function Home() {
    const { username } = useContext(AppContext);
    return (
        <>
        This is the Home Page and user is: 
        {username}
        
        
        </>
    
    )
}