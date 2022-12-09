import LineChart from "../Charts/LineChart"
import Image from "next/image"
import { iCoins } from "../../Redux/Coins/coinsTypes"

// css
import styles from "./coinsTabale.module.css"

interface iTabaleHead {
    title: string
}

export const TabaleHead: iTabaleHead[] = [
    {
        title: "#"
    },
    {
        title: "name"
    },
    {
        title: "price"
    },
    {
        title: "1h %"
    },
    {
        title: "24h %"
    },
    {
        title: "7d %"
    },
    {
        title: "market cap"
    },
    {
        title: "volume(24h)"
    },
    {
        title: "circulating supply"
    },
    {
        title: "last 7 days"
    }
]

export const TabaleBody = (coins: iCoins) => {
    let color = (price: number) => {
        if (price > 0) {
            return "up-color"
        }
        else if (price < 0) {
            return "down-color"
        }
        else {
            return "neutral-color"
        }
    }

    return [
        {
            value: coins.market_cap_rank
        },
        {
            value:
                <div className="align-center d-flex">
                    <div className="align-center d-flex">
                        <Image
                            width={25}
                            height={25}
                            src={coins.image}
                            alt={`${coins.name} logo`}
                            className={styles.coin_img}
                        />
                    </div>
                    <div style={{ marginLeft: 5 }}>
                        <span>{coins.name}</span>
                        <span className={styles.symbol}>{`${coins.symbol.toUpperCase()}`}</span>
                    </div>
                </div>
        },
        {
            value: `$${coins.current_price > 999 ? coins.current_price.toLocaleString() : +coins.current_price}`
        },
        {
            value:
                <span className={color(+coins.price_change_percentage_1h_in_currency.toFixed(2))}>
                    {`${coins.price_change_percentage_1h_in_currency.toFixed(2)}%`}
                </span>
        },
        {
            value:
                <span className={color(+coins.price_change_percentage_24h_in_currency.toFixed(2))}>
                    {`${coins.price_change_percentage_24h_in_currency.toFixed(2)}%`}
                </span>
        },
        {
            value:
                <span className={color(+coins.price_change_percentage_7d_in_currency.toFixed(2))}>
                    {`${coins.price_change_percentage_7d_in_currency.toFixed(2)}%`}
                </span>
        },
        {
            value: `$${coins.market_cap.toLocaleString()}`
        },
        {
            value: `$${coins.total_volume.toLocaleString()}`
        },
        {
            value: `${coins.circulating_supply.toLocaleString()} ${coins.symbol.toUpperCase()}`
        },
        {
            value: <LineChart data={coins.sparkline_in_7d.price} />
        }
    ]
}