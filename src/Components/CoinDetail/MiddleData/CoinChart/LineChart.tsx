import React, { useState, useEffect } from 'react'

// syncfusion
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Category,
    Tooltip,
    DataLabel,
    Zoom,
    Crosshair,
    AreaSeries,
    DateTime,
    Logarithmic,
} from '@syncfusion/ej2-react-charts';

// redux
import { useSelector } from "react-redux";
import { State } from "../../../../Redux/store";

// sass variables
import styles from "../../../../styles/sass/_variables.module.scss"

// chart options
import { primaryxAxis, primaryyAxis, tooltip, chartArea, zoomSetting, crosshair, marker, border, tooltipRender } from "./chartData";
import ChartSpinner from './ChartSpinner';

// ts
interface Props {
    isfullScActive: boolean;
}

const LineChart = ({ isfullScActive }: Props) => {
    const [loading, setLoading] = useState(true);

    // redux
    const chart = useSelector((state: State) => state.coin_detail.chart);
    const { darkMode, height, width } = useSelector((state: State) => state.general);

    // minimum and maximum coin price
    const prices = chart?.prices.map(item => item[1])
    let minPrice = prices ? prices.sort((a, b) => a - b)[0] : 1000;
    let maxPrice = prices ? prices.sort((a, b) => b - a)[0] : 1000;

    const data = chart?.prices.map(item => {
        return {
            date: item[0],
            price: item[1]
        }
    })


    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            {
                loading ?
                    <ChartSpinner /> :
                    <ChartComponent id='detail-chart'
                        primaryXAxis={primaryxAxis(darkMode)}
                        primaryYAxis={primaryyAxis(darkMode, minPrice, maxPrice)}
                        tooltip={tooltip}
                        chartArea={chartArea}
                        zoomSettings={zoomSetting}
                        tooltipRender={tooltipRender}
                        crosshair={crosshair(darkMode)}
                        height={isfullScActive ? `${height}px` : "100%"}
                        width={isfullScActive ? `${width}px` : "100%"}
                        style={{ minHeight: 450, maxHeight: isfullScActive ? "100vh" : 454 }}
                    >
                        <Inject services={[AreaSeries, Tooltip, DataLabel, Category, DateTime, Logarithmic, Zoom, Crosshair]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective
                                border={border}
                                dataSource={data}
                                marker={marker}
                                xName='date'
                                yName='price'
                                fill='url(#gradient-chart)'
                                type={"Area"}
                            >
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
            }
            {/* chart bg gradient styles */}
            <style> {`
                 #gradient-chart stop { 
                     stop-color: ${styles.color_primary}; 
                 } 
                 #gradient-chart stop[offset="0"]{ 
                     stop-opacity: 0.20; 
                 } 
                 #gradient-chart stop[offset="1"]{ 
                     stop-opacity: 0; 
                 } 
             `}
            </style>
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-chart" style={{ opacity: 0.75 }} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0"></stop>
                        <stop offset="1"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </>
    )
}

export default LineChart