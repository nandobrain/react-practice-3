import { useQuery } from "@tanstack/react-query"
import Axios from "axios"


export default function Home() {
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
       return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (isError) {
        return <h1>Loading...</h1>
    }
   
    return (
        <>
        This is the Home Page : 
        <p>{catData?.fact}</p>
        <button onClick={refetch}>Udpate Data</button>
       
        
        
        </>
    
    )
}