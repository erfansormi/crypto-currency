import React from "react";

// fullScreen lib
import { FullScreen, useFullScreenHandle } from "react-full-screen";

// components
import TopButtons from "./TopButtons";
import LineChart from "./LineChart";
import CandleChart from "./CandleChart";

// redux
import { useSelector } from "react-redux";
import { State } from "../../../../Redux/store";

const CoinChart = () => {
    // redux
    const chartType = useSelector((state: State) => state.coin_detail.chartType);

    // fullScreen lib
    const handle = useFullScreenHandle();

    return (
        <>
            <TopButtons handle={handle} />
            <FullScreen handle={handle} className="root-nodes py-4">
                {
                    chartType == "line" ?
                        <LineChart /> :
                        chartType == "candle" ?
                            <CandleChart /> : null
                }
            </FullScreen>
        </>
    )
}

export default CoinChart;