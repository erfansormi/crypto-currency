import { DataType } from "../../../../../Redux/Coins/Detail/coinDetailTypes"

export const nameHeader = (data: DataType) => {
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

export const nameFooter = (data: DataType) => {
    return [
        {
            value: <span className="pillName-primary pillName">rank #{data?.market_cap_rank} </span>
        },
        {
            value: <span className="pillName">coin</span>
        }
    ]
}