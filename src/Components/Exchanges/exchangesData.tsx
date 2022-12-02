import Image from "next/image"
import { iExchanges } from "../../Redux/Exchanges/exchangesSlice"
import styles from "./exchanges.module.css"

export const exchangesColumns = [
    {
        title: "#"
    },
    {
        title: "exchange"
    },
    {
        title: "score"
    },
    {
        title: "trading volume(24h)"
    },
    {
        title: "country"
    },
    {
        title: "year established"
    },
    {
        title: "website"
    }
]

export const exchangesRows = (data: iExchanges) => {
    return [
        {
            value: data.trust_score_rank
        },
        {
            value:
                <div className="align-center">
                    <Image
                        src={data.image}
                        alt={data.name}
                        width={30}
                        height={30}
                        className={"mr-3 circle"}
                        style={{ height: "auto" }}
                        quality={95}
                    />
                    <span>
                        {data.name}
                    </span>
                </div>
        },
        {
            value:
                <span className={`${data.trust_score > 8 ? "up-bg" : data.trust_score > 6 ? "warning-bg" : "down-bg"}`}>
                    {data.trust_score}
                </span>
        },
        {
            value:
                `$${data.trade_volume_24h_btc >= 1000 ?
                    Number(data.trade_volume_24h_btc.toFixed(0)).toLocaleString() :
                    data.trade_volume_24h_btc.toFixed(0)}`
        },
        {
            value: data.country ? data.country : "united states"
        },
        {
            value: data.year_established ? data.year_established : "2016"
        },
        {
            value:
                <a
                    style={{ textTransform: "lowercase" }}
                    href={data.url}
                    target={"_blank"}
                >

                    {/* bottom filter show only main url and removing extra addres like https, www., /example */}
                    {data.url.replace(`https://www.`, "").replace("https://", "").replace("http://", "").split("/")[0]}
                </a>
        }
    ]
}