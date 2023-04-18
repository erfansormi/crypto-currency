import { Exchanges } from "../../types/exchanges/exchanges";

export const fetchExchanges = async () => {
    let dataUrl = `https://api.coingecko.com/api/v3/exchanges`;
    let exchanges: null | Exchanges = null;
    let error = "";

    const handleFetch = async () => {
        await fetch(dataUrl)
            .then((res) => res.json())
            .then(json => exchanges = json)
            .catch((err) => error = err.message || err)
    }
    await handleFetch()

    return {
        exchanges,
        error
    };
}