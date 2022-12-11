import React, { useState, useEffect } from 'react'

// suncfusion
import {
    AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, RowDirective, RowsDirective, SeriesDirective, Inject,
    CandleSeries, Category, Tooltip, ILoadedEventArgs, DateTime, Zoom, Logarithmic, StripLineDirective, ChartAreaModel, CrosshairSettingsModel,
    Crosshair, LineSeries, AccumulationDistributionIndicator, IAxisLabelRenderEventArgs, TooltipSettingsModel,
    StripLine, ChartTheme, IndicatorsDirective, IndicatorDirective, StripLinesDirective
}
    from '@syncfusion/ej2-react-charts';

// syncfusion option data
import { primaryxAxis, primaryyAxis, crosshair, chartArea, tooltip } from './chartData';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';
import ChartSpinner from './ChartSpinner';

// ts
interface Props {
    isfullScActive: boolean;
}

const CandleChart = ({ isfullScActive }: Props) => {
    const [loading, setLoading] = useState(true);

    // redux
    const candleChart = useSelector((state: State) => state.coin_detail.candle);
    const { darkMode, height, width } = useSelector((state: State) => state.general);
    const chart = useSelector((state: State) => state.coin_detail.chart);
    const detail = useSelector((state: State) => state.coin_detail.detail);

    // minimum and maximum coin price
    const prices = chart?.prices.map(item => item[1])
    let minPrice = prices ? prices.sort((a, b) => a - b)[0] : 1000;
    let maxPrice = prices ? prices.sort((a, b) => b - a)[0] : 1000;

    // candle data
    const candle = candleChart?.map(item => {
        return {
            date: item[0],
            open: item[1],
            high: item[2],
            low: item[3],
            close: item[4]
        }
    })

    const animation = { enable: true };
    const lines = { width: 0 };

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
                        crosshair={crosshair(darkMode)}
                        chartArea={chartArea}
                        height={isfullScActive ? `${height}px` : "100%"}
                        width={isfullScActive ? `${width}px` : "100%"}
                        style={{ minHeight: 450, maxHeight: isfullScActive ? "100vh" : 454 }}
                    >
                        <Inject services={[CandleSeries, Category, Tooltip, StripLine, DateTime, Logarithmic, Crosshair, LineSeries, AccumulationDistributionIndicator]} />
                        <AxesDirective>
                            <AxisDirective rowIndex={0} name='secondary' opposedPosition={true}
                                majorGridLines={lines} majorTickLines={lines} lineStyle={lines}>
                            </AxisDirective>
                        </AxesDirective>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={candle} width={2}
                                xName='date' low='low' high='high' close='close' open='open'
                                name={detail?.name} bearFillColor='#2ecd71' bullFillColor='#e74c3d' type='Candle' animation={animation}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
            }
        </>
    )
}

export default CandleChart