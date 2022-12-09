import React from 'react'
import { useRouter } from "next/router";

// mui
import { Tooltip } from '@mui/material';

// fullscreen lib
import { FullScreenHandle } from 'react-full-screen';

// chart day data
import { days } from "./topButtonsData";

// icons
import { BiLineChart } from 'react-icons/bi';
import { TbChartCandle } from "react-icons/tb"
import { MdFullscreen } from 'react-icons/md';

// redux
import { useSelector, useDispatch } from "react-redux";
import { changeChartType } from '../../../../Redux/CoinDetail/coinDetailSlice';
import { State } from "../../../../Redux/store";

// ts
interface Props {
    handle: FullScreenHandle
}

const TopButtons = ({ handle }: Props) => {
    const router = useRouter();

    // redux
    const dispatch = useDispatch();
    const detail = useSelector((state: State) => state.coin_detail.detail);
    const chartType = useSelector((state: State) => state.coin_detail.chartType);

    // handle selected day for show chart
    const handleClick = (e: any) => {
        router.push({
            query: {
                chart_day: e.target.value,
                coin_id: detail?.id
            }
        })
    }

    return (
        <div>
            <div className="mb-12">
                <div className="mb-5">
                    <h3>{detail?.name} Price Chart ({router.query.chart_day != "max" ? `${router.query.chart_day}d` : router.query.chart_day})</h3>
                </div>
                <div className="flex-column flex-sm-row justify-between">
                    <div className="d-flex align-center mb-5 mb-sm-0">
                        {days.map((item, index) =>
                            <button
                                key={index * 6 + 29}
                                value={item.value}
                                onClick={handleClick}
                                className={`mr-2 fs-5 p-2 ${router.query.chart_day == item.value ? "pillName-primary pillName" : "pillName"}`}
                            >
                                {item.text}
                            </button>
                        )}
                    </div>
                    <div>
                        <Tooltip title={"Line Chart"}>
                            <button
                                className={`${chartType == "line" ? "pillName-primary" : ""} mr-2 pillName fs-7`}
                                onClick={() => dispatch(changeChartType("line"))}
                            >
                                <BiLineChart />
                            </button>
                        </Tooltip>
                        <Tooltip title={"Candle Chart"}>
                            <button
                                className={`${chartType == "candle" ? "pillName-primary" : ""} mr-2 pillName fs-7`}
                                onClick={() => dispatch(changeChartType("candle"))}
                            >
                                <TbChartCandle />
                            </button>
                        </Tooltip>
                        <Tooltip title={"Fullscreen"}>
                            <button
                                onClick={handle.enter}
                                className={`mr-2 pillName fs-7`}
                            >
                                <MdFullscreen />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopButtons;