import axios from "axios";
import { Chart, CandleChart } from "../../Redux/CoinDetail/coinDetailTypes";

export const fetchApiCoinChart = async (id: string | string[] | undefined, day: string | string[] | undefined) => {
    let chart: Chart | null = null;
    let candleChart: CandleChart | null = null;
    let chartErr = '';

    const handleFetchChart = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`)
            .then((res) => {
                chart = res.data;
            })
            .catch((err) => {
                chartErr = err.message;
            })
    }

    const handleFetchCandle = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=${day}`)
            .then((res) => {
                candleChart = res.data;
            })
            .catch((err) => {
                chartErr = err.message;
            })
    }

    await handleFetchChart();
    await handleFetchCandle();

    return {
        chart,
        chartErr,
        candleChart
    };
}