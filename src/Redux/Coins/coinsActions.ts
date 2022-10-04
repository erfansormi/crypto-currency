import axios from "axios";
import { coinsActions, iCoins } from "./coinsTypes";

const fetchRequest = () => {
    return {
        type: coinsActions.fetchRequest,
    }
}

const fetchRequestSuccess = (data: iCoins) => {
    return {
        type: coinsActions.fetchRequestSuccess,
        payload: data
    }
}

const fetchRequestFailure = (error: string) => {
    return {
        type: coinsActions.fetchRequestFailure,
        payload: error
    }
}

export const pageHandleChange = (page: number) => {
    return {
        type: coinsActions.pageHandleChange,
        payload: page
    }
}

const coinsFetchRequest = (page: number) => {
    let DataUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`

    return (dispatch: any) => {
        dispatch(fetchRequest());

        axios.get(DataUrl)
            .then((response) => {
                dispatch(fetchRequestSuccess(response.data))
            })

            .catch((error) => {
                dispatch(fetchRequestFailure(error.message))
            })
    }
}

export default coinsFetchRequest;