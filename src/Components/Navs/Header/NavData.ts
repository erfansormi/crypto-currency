// types
import { globalType } from "../../../Redux/Global/globalTypes"

// data
export const navInfoData = (global: globalType) => {
    return [
        {
            text: "coins",
            value: global?.active_cryptocurrencies
        },
        {
            text: "exchanges",
            value: global?.markets
        },
        {
            text: "market cap",
            value: `$${global?.total_market_cap.usd.toLocaleString()}`
        },
        {
            text: "24h vol",
            value: `$${global?.total_volume.usd.toLocaleString()}`
        },
    ]
}

export const navDominanceData = (global: globalType) => {
    return {
        text: "dominance:",
        value: [
            {
                text: "BTC:",
                value: `${global?.market_cap_percentage.btc.toFixed(1)}%`
            },
            {
                text: "ETH:",
                value: `${global?.market_cap_percentage.eth.toFixed(1)}%`
            },
        ]
    }
}