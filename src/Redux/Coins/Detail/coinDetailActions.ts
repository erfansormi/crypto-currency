import axios from "axios";
import { Chart, coinDetailActions, Data } from "./coinDetailTypes";

const chartFetchRequest = () => {
    return {
        type: coinDetailActions.chartFetchRequest
    }
}

const chartFetchRequestSuccess = (chart: Chart) => {
    return {
        type: coinDetailActions.chartFetchRequestSuccess,
        payload: chart
    }
}

const chartFetchRequestFailure = (err: string) => {
    return {
        type: coinDetailActions.chartFetchRequestFailure,
        payload: err
    }
}

export const coinChartFetchRequestFunc = (id: string | undefined) => {
    return (dispatch: any) => {
        dispatch(chartFetchRequest());

        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
            .then(response => {
                dispatch(chartFetchRequestSuccess(response.data));
            })
            .catch(err => {
                dispatch(chartFetchRequestFailure(err.message));
            })
    }
}

const dataFetchRequest = () => {
    return {
        type: coinDetailActions.dataFetchRequest
    }
}

const dataFetchRequestSuccess = (data: Data) => {
    return {
        type: coinDetailActions.dataFetchRequestSuccess,
        payload: data
    }
}

const dataFetchRequestFailure = (err: string) => {
    return {
        type: coinDetailActions.dataFetchRequestFailure,
        payload: err
    }
}

export const coinDetailDataFetchRequestFunc = (id: string | undefined) => {
    return (dispatch: any) => {
        dispatch(dataFetchRequest());

        axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`)
            .then(response => {
                dispatch(dataFetchRequestSuccess(response.data));
            })
            .catch(err => {
                dispatch(dataFetchRequestFailure(err.message));
            })
    }
}