import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export default function useGetCat() {
    const { data, refetch, isLoading: isCatLoading,
    error } = useQuery( ["cat"], async () => {
        return Axios.get("https://catFact.ninja/fact").then((res) => res.data);
    });

    const refetchData = () => {
        alert("DATA REFETCH")
        refetch();
    }
    
    return { data, refetch };
}