import { CoinDetail } from "../../../../../types/Coins/coinDetail";

export const SideInfoData = (data: CoinDetail) => {
    return [
        {
            text: data.name + "price today",
        },
        {
            text: `${data.name} price`,
            value: `$${data.market_data.current_price.usd > 999 ?
                data.market_data.current_price.usd.toLocaleString() :
                data.market_data.current_price.usd
                }`
        },
        {
            text:
                <>
                    price change <span className="pillName">24h</span>
                </>,
            value:
                <>
                    <span>
                        ${data.market_data.price_change_24h > 1 || data.market_data.price_change_24h < 1 ?
                            data.market_data.price_change_24h.toFixed(2) :
                            data.market_data.price_change_24h
                        }
                    </span>
                    <span className={`${data.market_data.price_change_percentage_24h > 0 ?
                        "up-color" : data.market_data.price_change_percentage_24h < 0 ?
                            "down-color" : "neutral-color"}`}>
                        {data.market_data.price_change_percentage_24h.toFixed(2)}%
                    </span>
                </>
        },
        {
            text:
                <>
                    24h Low / 24h High
                </>,
            value:
                <>
                    <span>
                        ${data.market_data.low_24h.usd > 999 ?
                            data.market_data.low_24h.usd.toLocaleString() :
                            data.market_data.low_24h.usd}/
                    </span>
                    <span>
                        ${data.market_data.high_24h.usd > 999 ?
                            data.market_data.high_24h.usd.toLocaleString() :
                            data.market_data.high_24h.usd}
                    </span>
                </>
        },
        {
            text:
                <>
                    trading volume <span className="pillName">24h</span>
                </>,
            value:
                <>
                    ${data.market_data.total_volume.usd > 999 ?
                        data.market_data.total_volume.usd.toLocaleString() :
                        data.market_data.total_volume.usd}
                </>
        },
        {
            text:
                <>
                    volume / market Cap
                </>,
            value:
                <>
                    {Number(data.market_data.total_volume.usd / data.market_data.market_cap.usd).toFixed(5)}
                </>
        },
        {
            text:
                <>
                    market rank
                </>,
            value:
                <>
                    #{data.market_cap_rank}
                </>
        },
        {
            text:
                <>
                    market cap
                </>,
            value:
                <>
                    <span>${data.market_data.market_cap.usd > 999 ?
                        data.market_data.market_cap.usd.toLocaleString() :
                        data.market_data.market_cap.usd}
                    </span>
                    <span className={`${data.market_data.market_cap_change_percentage_24h > 0 ?
                        "up-color" : data.market_data.market_cap_change_percentage_24h < 0 ?
                            "down-color" : "neutral-color"}`}>
                        {data.market_data.market_cap_change_percentage_24h.toFixed(2)}%
                    </span>
                </>
        }
    ]
}