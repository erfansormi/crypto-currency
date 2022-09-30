import axios from "axios";
import { globalActions, iGlobal } from "./globalTypes";

const fetchRequest = () => {
    return {
        type: globalActions.fetchRequest,
    }
}

const fetchRequestSuccess = (data: iGlobal) => {
    return {
        type: globalActions.fetchRequestSuccess,
        payload: data
    }
}

const fetchRequestFailure = (error: string) => {
    return {
        type: globalActions.fetchRequestFailure,
        payload: error
    }
}

const globalFetchRequest = () => {
    let DataUrl = `https://api.coingecko.com/api/v3/global`

    return (dispatch: any) => {
        dispatch(fetchRequest());

        axios.get(DataUrl)
            .then((response) => {
                dispatch(fetchRequestSuccess(response.data.data))
            })

            .catch((error) => {
                dispatch(fetchRequestFailure(error.message))
            })
    }
}

export default globalFetchRequest;