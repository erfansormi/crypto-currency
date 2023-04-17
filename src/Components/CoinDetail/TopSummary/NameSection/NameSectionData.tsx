import { CoinDetailType } from "../../../../../types/Coins/coinDetail";

export const nameHeader = (data: CoinDetailType) => {
    return [
        {
            value: <img src={data?.image.small} alt="coin image" />
        },
        {
            value: <h2>{data?.name}</h2>
        },
        {
            value: <span style={{ lineHeight: "25px" }} className={"pillName"}>{data?.symbol.toUpperCase()}</span>
        }
    ]
}

export const nameFooter = (data: CoinDetailType) => {
    return [
        {
            value: <span className="pillName-primary pillName">rank #{data?.market_cap_rank} </span>
        },
        {
            value: <span className="pillName">coin</span>
        }
    ]
}