import axios from "axios";
import { iCoins } from "../../Redux/Coins/coinsTypes";

export const fetchCoins = async (page: string | string[] | undefined) => {
    let dataUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    let coins: null | iCoins[] = null;
    let error = "";

    const handleFetch = async () => {
        await axios.get(dataUrl)
            .then((res) => {
                coins = res.data;
            })
            .catch((err) => {
                error = err.message
            })
    }
    await handleFetch()   

    return {
        coins,
        error
    };
}