import { CoinDetailType } from "../../../../types/Coins/coinDetail";

export const nameHeader = (data: CoinDetailType) => {
    return [
        {
            value: <img style={{ width: 35 }} src={data?.image.small} alt="coin image" className="h-auto" />
        },
        {
            value: <h2>{data?.name}</h2>
        },
        {
            value: <span style={{ lineHeight: "25px" }} className={"badge"}>{data?.symbol.toUpperCase()}</span>
        }
    ]
}

export const nameFooter = (data: CoinDetailType) => {
    return [
        {
            value: <span className="badge-primary badge">rank #{data?.market_cap_rank} </span>
        },
        {
            value: <span className="badge">coin</span>
        }
    ]
}