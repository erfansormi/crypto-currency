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
import { primaryxAxis, primaryyAxis, crosshair,chartArea } from './chartData';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';

const CandleChart = () => {
    const [loading, setLoading] = useState(true);

    // redux
    const candleChart = useSelector((state: State) => state.coin_detail.candle);
    const darkMode = useSelector((state: State) => state.general.darkMode);
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
    const tooltip: TooltipSettingsModel = { enable: true, shared: true };
    const lines = { width: 0 };

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            {
                loading ?
                    <span className='pillName fs-7 p-4 radius-4'>Loading...</span> :
                    <ChartComponent id='charts'
                        primaryXAxis={primaryxAxis(darkMode)}
                        primaryYAxis={primaryyAxis(darkMode, minPrice, maxPrice)}
                        tooltip={tooltip}
                        crosshair={crosshair(darkMode)}
                        chartArea={chartArea}
                        width={'100%'}
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