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

const coinsFetchRequest = () => {
    let DataUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d`

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