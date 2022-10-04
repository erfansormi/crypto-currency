import { DataType } from "../../../../Redux/Coins/Detail/coinDetailTypes"

export const nameHeader = (data: DataType) => {
    return [
        {
            value: <img src={data?.image.small} alt="coin image" />
        },
        {
            value: <h2>{data?.name}</h2>
        },
        {
            value: <span>{data?.symbol.toUpperCase()}</span>
        }
    ]
}

export const nameFooter = (data: DataType) => {
    return [
        {
            value: <span>rank #{data?.market_cap_rank} </span>
        },
        {
            value: <span>coin</span>
        }
    ]
}