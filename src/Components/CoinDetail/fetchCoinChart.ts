import axios from "axios";
import { Chart } from "../../Redux/CoinDetail/coinDetailTypes";

export const fetchApiCoinChart = async (id: string | string[] | undefined, day: string | string[] | undefined) => {
    let chart: Chart | null = null;
    let chartErr = '';

    const handleFetch = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`)
            .then((res) => {
                chart = res.data;
            })
            .catch((err) => {
                chartErr = err.message;
            })
    }

    await handleFetch()

    return {
        chart,
        chartErr
    };
}