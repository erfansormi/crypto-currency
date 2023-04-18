import { CoinDetail } from "../../../../types/Coins/coinDetail";
let handleProgressValue = (low: number, nowPrice: number, high: number) => {
    const result: number = 100 * (nowPrice - low) / (high - low);

    return {
        width: `${result}%`,
    }
}

export const priceData = (data: CoinDetail) => {
    return [
        {
            value:
                <div className="light-color">
                    <span>
                        {data.name} price {`(${data.symbol.toUpperCase()})`}
                    </span>
                </div>
        },
        {
            value:
                <>
                    <div>
                        <h3
                            style={{ fontSize: "1.8rem", lineHeight: "35px" }}
                        >
                            ${data.market_data.current_price.usd > 999 ?
                                data.market_data.current_price.usd.toLocaleString() :
                                data.market_data.current_price.usd
                            }
                        </h3>
                    </div>
                    <div>
                        <span
                            style={{ fontSize: "0.9rem", lineHeight: "35px", padding: "8px" }}
                            className={`${data.market_data.price_change_percentage_24h_in_currency.usd > 0 ?
                                "up-bg" :
                                data.market_data.price_change_percentage_24h_in_currency.usd < 0 ?
                                    "down-bg" :
                                    "neutral-bg"}`}>
                            {data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
                        </span>
                    </div>
                </>
        },
        {
            value:
                <>
                    {data.symbol == "btc" ?
                        <>
                            <div className="light-color">
                                <span>
                                    {data.market_data.current_price.eth.toFixed(2)} ETH
                                </span>
                            </div>
                            <div>
                                <span className={`${data.market_data.price_change_percentage_24h_in_currency.eth > 0 ?
                                    "up-color" :
                                    data.market_data.price_change_percentage_24h_in_currency.eth < 0 ?
                                        "down-color" :
                                        "neutral-color"}`}
                                >
                                    {data.market_data.price_change_percentage_24h_in_currency.eth.toFixed(2)}%
                                </span>
                            </div>
                        </> :
                        <>
                            <div className="light-color">
                                <span>
                                    {data.market_data.current_price.btc.toFixed(4)} BTC
                                </span>
                            </div>
                            <div>
                                <span
                                    className={`${data.market_data.price_change_percentage_24h_in_currency.btc > 0 ?
                                        "up-bg" :
                                        data.market_data.price_change_percentage_24h_in_currency.btc < 0 ?
                                            "down-bg" :
                                            "neutral-bg"}`}
                                >
                                    {data.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2)}%
                                </span>
                            </div>
                        </>
                    }
                </>
        },
        {
            value:
                <>
                    <div>
                        <span className="light-color mr-2">
                            Low:
                        </span>
                        <span>
                            ${data.market_data.low_24h.usd > 999 ?
                                data.market_data.low_24h.usd.toLocaleString() :
                                data.market_data.low_24h.usd
                            }
                        </span>
                    </div>
                    <div className="align-center d-flex" style={{ width: 170, height: 20 }}>
                        <span className="progress-bar">
                            <span
                                className="progress-value"
                                style={handleProgressValue(data.market_data.low_24h.usd, data.market_data.current_price.usd, data.market_data.high_24h.usd)}
                            >
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className="light-color mr-1">
                            High:
                        </span>
                        <span>
                            ${data.market_data.high_24h.usd > 999 ?
                                data.market_data.high_24h.usd.toLocaleString() :
                                data.market_data.high_24h.usd
                            }
                        </span>
                    </div>
                </>
        }
    ]
}