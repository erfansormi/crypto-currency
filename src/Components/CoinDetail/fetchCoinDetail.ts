import axios from "axios";
import { CoinDetail } from "../../../types/Coins/coinDetail";

export const fetchApiCoinDetail = async (id: string | string[] | undefined) => {
    let detail: CoinDetail | null = null;
    let detailErr = "";

    const handleFetch = async () => {
        await fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`)
            .then(res => res.json())
            .then(data => detail = data)
            .catch((err) => {
                detailErr = err;
            })
    }

    await handleFetch();

    return {
        detail,
        detailErr
    };
}