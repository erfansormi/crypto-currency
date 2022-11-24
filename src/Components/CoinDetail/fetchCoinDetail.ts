import axios from "axios";
import { CoinDetail } from "../../Redux/CoinDetail/coinDetailTypes";

export const fetchApiCoinDetail = async (id: string | string[] | undefined) => {
    let detail: CoinDetail | null = null;
    let detailErr = "";

    const handleFetch = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`)
            .then((res) => {
                detail = res.data;
            })
            .catch((err) => {
                detailErr = err.message;
            })
    }

    await handleFetch();

    return {
        detail,
        detailErr
    };
}