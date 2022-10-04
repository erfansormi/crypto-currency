import ChartInTabale from "./ChartInTabale"
import { iCoins } from "../../Redux/Coins/coinsTypes"

// react-router-dom
import { Link } from 'react-router-dom';

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
            return {
                color: "var(--up-color)"
            }
        }
        else if (price < 0) {
            return {
                color: "var(--down-color)"
            }
        }
        else {
            return {
                color: "var(--text-color-sub-1)"
            }
        }
    }

    return [
        {
            value: coins.market_cap_rank
        },
        {
            value:
                <Link to={`coins/${coins.id}`}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <img
                                src={coins.image}
                                alt={"coin image"}
                                className={styles.coin_img}
                            />
                        </div>
                        <div style={{ marginLeft: 5 }}>
                            <span>{coins.name}</span>
                            <span className={styles.symbol}>{`${coins.symbol.toUpperCase()}`}</span>
                        </div>
                    </div>
                </Link>
        },
        {
            value: `$${coins.current_price > 999 ? coins.current_price.toLocaleString() : +coins.current_price}`
        },
        {
            value:
                <span style={color(coins.price_change_percentage_1h_in_currency)}>
                    {`${coins.price_change_percentage_1h_in_currency.toFixed(2)}%`}
                </span>
        },
        {
            value:
                <span style={color(coins.price_change_percentage_24h_in_currency)}>
                    {`${coins.price_change_percentage_24h_in_currency.toFixed(2)}%`}
                </span>
        },
        {
            value:
                <span style={color(coins.price_change_percentage_7d_in_currency)}>
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
            value:
                <Link to={`coins/${coins.id}`}>
                    <ChartInTabale data={coins.sparkline_in_7d.price}
                        percentage={coins.price_change_percentage_7d_in_currency}
                    />
                </Link>
        }
    ]
}