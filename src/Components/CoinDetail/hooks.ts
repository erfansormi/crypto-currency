import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { CandleDetailType, Chart } from "../../../types/Coins/coinDetail";

export const useCoinLineChart = (id: string, day: string) => {
    const query = useQuery<Chart, any>(["coin-line-chart", id, day],
        async () => await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`)
            .then((res) => res.data)
            .catch((err) => err.response.data.message || err.message));

    return query;
}

export const useCoinCandleChart = (id: string, day: string) => {
    const query = useQuery<CandleDetailType, any>(["coin-candle-chart", id, day],
        async () => await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=${day}`)
            .then((res) => res.data)
            .catch((err) => err.response.data.message || err.message));

    return query;
}