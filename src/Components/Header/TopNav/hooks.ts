import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGlobalData = () => {
    return useQuery(["global-data"], async () =>
        await axios.get("https://api.coingecko.com/api/v3/global")
            .then(res => res.data)
            .catch(err => err.response.data.message || err.message))
}