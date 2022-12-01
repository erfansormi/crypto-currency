import axios from "axios";
import { iExchanges } from "../../Redux/Exchanges/exchangesSlice";

export const fetchExchanges = async () => {
    let dataUrl = `https://api.coingecko.com/api/v3/exchanges`;
    let exchanges: null | iExchanges = null;
    let error = "";

    const handleFetch = async () => {
        await axios.get(dataUrl)
            .then((res) => {
                exchanges = res.data;
            })
            .catch((err) => {
                error = err.message
            })
    }
    await handleFetch()

    return {
        exchanges,
        error
    };
}