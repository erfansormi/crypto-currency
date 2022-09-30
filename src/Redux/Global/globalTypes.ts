// interfaces
export interface iGlobal {
    active_cryptocurrencies: number,
    upcoming_icos: number,
    ongoing_icos: number,
    ended_icos: number,
    markets: number,
    total_market_cap: {
        btc: number,
        eth: number,
        ltc: number,
        bch: number,
        bnb: number,
        eos: number,
        xrp: number,
        xlm: number,
        link: number,
        dot: number,
        yfi: number,
        usd: number,
        aed: number,
        ars: number,
        aud: number,
        bdt: number,
        bhd: number,
        bmd: number,
        brl: number,
        cad: number,
        chf: number,
        clp: number,
        cny: number,
        czk: number,
        dkk: number,
        eur: number,
        gbp: number,
        hkd: number,
        huf: number,
        idr: number,
        ils: number,
        inr: number,
        jpy: number,
        krw: number,
        kwd: number,
        lkr: number,
        mmk: number,
        mxn: number,
        myr: number,
        ngn: number,
        nok: number,
        nzd: number,
        php: number,
        pkr: number,
        pln: number,
        rub: number,
        sar: number,
        sek: number,
        sgd: number,
        thb: number,
        try: number,
        twd: number,
        uah: number,
        vef: number,
        vnd: number,
        zar: number,
        xdr: number,
        xag: number,
        xau: number,
        bits: number,
        sats: number
    },
    total_volume: {
        btc: number,
        eth: number,
        ltc: number,
        bch: number,
        bnb: number,
        eos: number,
        xrp: number,
        xlm: number,
        link: number,
        dot: number,
        yfi: number,
        usd: number,
        aed: number,
        ars: number,
        aud: number,
        bdt: number,
        bhd: number,
        bmd: number,
        brl: number,
        cad: number,
        chf: number,
        clp: number,
        cny: number,
        czk: number,
        dkk: number,
        eur: number,
        gbp: number,
        hkd: number,
        huf: number,
        idr: number,
        ils: number,
        inr: number,
        jpy: number,
        krw: number,
        kwd: number,
        lkr: number,
        mmk: number,
        mxn: number,
        myr: number,
        ngn: number,
        nok: number,
        nzd: number,
        php: number,
        pkr: number,
        pln: number,
        rub: number,
        sar: number,
        sek: number,
        sgd: number,
        thb: number,
        try: number,
        twd: number,
        uah: number,
        vef: number,
        vnd: number,
        zar: number,
        xdr: number,
        xag: number,
        xau: number,
        bits: number,
        sats: number
    },
    market_cap_percentage: {
        btc: number,
        eth: number,
        usdt: number,
        usdc: number,
        bnb: number,
        xrp: number,
        busd: number,
        ada: number,
        sol: number,
        doge: number
    },
    market_cap_change_percentage_24h_usd: number,
    updated_at: number
}

type nullType = null;
export type globalType = nullType | iGlobal

export interface iGlobalInitialValue {
    global: globalType,
    loading: boolean,
    error: string
}

// enum
export enum globalActions {
    fetchRequest = "GLOBAL_FETCH_REQUEST",
    fetchRequestSuccess = "GLOBAL_FETCH_REQUEST_SUCCESS",
    fetchRequestFailure = "GLOBAL_FETCH_REQUEST_FAILURE"
}

// action types
interface fetchRequest {
    type: globalActions.fetchRequest
}

interface fetchRequestSuccess {
    type: globalActions.fetchRequestSuccess,
    payload: iGlobal
}

interface fetchRequestFailure {
    type: globalActions.fetchRequestFailure,
    payload: string
}

export type globalActionsTypes = fetchRequest | fetchRequestFailure | fetchRequestSuccess;