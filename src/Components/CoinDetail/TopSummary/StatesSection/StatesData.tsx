import { CoinDetail } from "../../../../types/Coins/coinDetail";

export const StatesData = (data: CoinDetail) => {
    return [
        {
            value:
                <div>
                    <div className="text-neutral-5">
                        <span>
                            market cap
                        </span>
                    </div>
                    <div>
                        <span>
                            {data.market_data.market_cap.usd ?
                                `$${data.market_data.market_cap.usd.toLocaleString()}` :
                                "unregistered!"
                            }
                        </span>
                    </div>
                    <div>
                        <span
                            className={`${data.market_data.market_cap_change_percentage_24h_in_currency.usd > 0 ?
                                "up-color" :
                                data.market_data.market_cap_change_percentage_24h_in_currency.usd < 0 ?
                                    "down-color" :
                                    "neutral-color"}`}
                        >
                            {data.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(2)}%
                        </span>
                    </div>
                </div>
        },
        {
            value:
                <div>
                    <div className="text-neutral-5">
                        <span>
                            fully diluted market cap
                        </span>
                    </div>
                    <div>
                        <span>
                            {data.market_data.fully_diluted_valuation.usd ?
                                `$${data.market_data.fully_diluted_valuation.usd.toLocaleString()}` :
                                "unregistered!"
                            }
                        </span>
                    </div>
                    <div>
                        <span
                            className={`${data.market_data.market_cap_change_percentage_24h_in_currency.usd > 0 ?
                                "up-color" :
                                data.market_data.market_cap_change_percentage_24h_in_currency.usd < 0 ?
                                    "down-color" :
                                    "neutral-color"}`}
                        >
                            {data.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(2)}%
                        </span>
                    </div>
                </div>
        },
        {
            value:
                <>
                    <div>
                        <div className="text-neutral-5">
                            <span>
                                volume
                                <span className="badge ml-2">24h</span>
                            </span>
                        </div>
                        <div>
                            <span>
                                {data.market_data.total_volume.usd ?
                                    `$${data.market_data.total_volume.usd.toLocaleString()}` :
                                    "unregistered!"
                                }
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="text-neutral-5">
                            <span>volume / market cap</span>
                        </div>
                        <div>
                            <span>
                                {Number(data.market_data.total_volume.usd / data.market_data.market_cap.usd).toFixed(5)}
                            </span>
                        </div>
                    </div>
                </>
        },
        {
            value:
                <>
                    <div>
                        <div className="text-neutral-5">
                            <span>circulating supply</span>
                        </div>
                        <div>
                            <span>
                                {data.market_data.circulating_supply}
                                <span className="badge ml-2">{data.symbol.toUpperCase()}</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="align-center justify-between">
                            <div className="text-neutral-5">
                                <span>max supply</span>
                            </div>
                            <div>
                                <span>
                                    {data.market_data.max_supply ? data.market_data.max_supply.toLocaleString() : "unregistered!"}
                                    <span className="badge ml-2">{data.symbol.toUpperCase()}</span>
                                </span>
                            </div>
                        </div>
                        <div className="align-center justify-between">
                            <div className="text-neutral-5">
                                <span>total supply</span>
                            </div>
                            <div>
                                <span>
                                    {data.market_data.total_supply ? data.market_data.total_supply.toLocaleString() : "unregistered!"}
                                    <span className="badge ml-2">{data.symbol.toUpperCase()}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </>
        }
    ]
}