// interfaces
export interface iCoins {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    fully_diluted_valuation: number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,
    price_change_percentage_24h: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    ath: number,
    ath_change_percentage: number,
    ath_date: string,
    atl: number,
    atl_change_percentage: number,
    atl_date: string,
    roi: null | {
        times: number,
        currency: string,
        percentage: number
    },
    last_updated: string,
    sparkline_in_7d: {
        price: number[]
    },
    price_change_percentage_1h_in_currency: number,
    price_change_percentage_24h_in_currency: number,
    price_change_percentage_7d_in_currency: number
}

type nullType = null;
export type coinsType = iCoins[] | nullType;

export interface iCoinsInitialValue {
    coins: coinsType,
    loading: boolean,
    error: string,
    page: number
}

// enum
export enum coinsActions {
    fetchRequest = "COINS_FETCH_REQUEST",
    fetchRequestSuccess = "COINS_FETCH_REQUEST_SUCCESS",
    fetchRequestFailure = "COINS_FETCH_REQUEST_FAILURE",
    pageHandleChange = "PAGE_HANDLE_CHANGE"
}

// action types
interface fetchRequest {
    type: coinsActions.fetchRequest
}

interface fetchRequestSuccess {
    type: coinsActions.fetchRequestSuccess,
    payload: iCoins[]
}

interface fetchRequestFailure {
    type: coinsActions.fetchRequestFailure,
    payload: string
}

interface pageHandleChange {
    type: coinsActions.pageHandleChange,
    payload: number
}

export type coinsActionsTypes = fetchRequest | fetchRequestFailure | fetchRequestSuccess | pageHandleChange;