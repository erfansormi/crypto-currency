import { iCoins } from "../../../types/Coins/coinsTypes";

export const fetchCoins = async () => {
    let coinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;
    let coins: null | iCoins[] = null;
    let error = "";

    const handleFetch = async () => {
        await fetch(coinsUrl)
            .then(async res => {
                const json = await res.json();
                if (!res.ok) {
                    error = json.message || res.statusText;
                }

                coins = json;
            })
            .catch(err => err)
    }
    await handleFetch()

    return {
        coins,
        error
    };
}