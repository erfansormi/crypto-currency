import { Dispatch, SetStateAction } from "react"

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
    price_change_percentage_1h_in_currency?: number,
    price_change_percentage_24h_in_currency?: number,
    price_change_percentage_7d_in_currency?: number
}

export interface iCoinsInitialValues {
    navigatedCoins: iCoins[],
    allCoins: iCoins[],
    page: number,
    skip: number,
    error: string
}

export interface HomeContextValues {
    initialValues: iCoinsInitialValues,
    setInitialValues: Dispatch<SetStateAction<iCoinsInitialValues>>
}

export interface SearchedCoins {
    api_symbol: string
    id: string
    large: string
    market_cap_rank: 1
    name: string
    symbol: string
    thumb: string
}

interface Data {
    coins: SearchedCoins[]
}

export interface SearchBarInitialValues {
    data: null | Data,
    loading: boolean,
    searchedText: string,
    error: string,
    helperText: string
}