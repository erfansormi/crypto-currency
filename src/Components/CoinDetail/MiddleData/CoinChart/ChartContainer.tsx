import React, { useEffect, useCallback } from "react";

// fullScreen lib
import { FullScreen, FullScreenHandle, useFullScreenHandle } from "react-full-screen";

// components
import TopButtons from "./TopButtons";
import LineChart from "./LineChart";
import CandleChart from "./CandleChart";

// redux
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../../../Redux/store";
import { updateHeight, updateWidth } from "../../../../Redux/General/generalSlice";

const CoinChart = () => {
    // redux
    const dispatch = useDispatch();
    const chartType = useSelector((state: State) => state.coin_detail.chartType);

    // fullScreen lib
    const handle = useFullScreenHandle();

    useEffect(() => {

        // handle page width and height
        const handleSizes = () => {
            dispatch(updateWidth(innerWidth));
            dispatch(updateHeight(innerHeight));
        }

        handleSizes();
        addEventListener("resize", handleSizes);
    }, [])


    return (
        <div className="border radius-5">
            <TopButtons handle={handle} />
            
            <FullScreen handle={handle} className="py-4 primary-bg primary-text">
                {
                    chartType == "line" ?
                        <LineChart isfullScActive={handle.active} /> :
                        chartType == "candle" ?
                            <CandleChart isfullScActive={handle.active} /> : null
                }
            </FullScreen>
        </div>
    )
}

export default CoinChart;