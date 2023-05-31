import  ChangeProfile  from "../Component/ChangeProfile";
import { useContext } from "react"
import { AppContext } from "../App"


export default function Porfile() {
    const { username, setUsername } = useContext(AppContext);

    return (
        <> 
        {" "}
        Profile, user is: 
        {username}
        <ChangeProfile />
        
        
        </>
    
    )
}