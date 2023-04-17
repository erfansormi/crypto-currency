import React from 'react';
import { useRouter } from 'next/router';

// suncfusion
import {
    ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
    CandleSeries, Category, Tooltip, DateTime, Zoom, Logarithmic,
    Crosshair, LineSeries, AccumulationDistributionIndicator, StripLine
}
    from '@syncfusion/ej2-react-charts';

// syncfusion option data
import { primaryxAxis, primaryyAxis, crosshair, chartArea, tooltip, zoomSetting } from './chartData';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';
import ChartSpinner from './ChartSpinner';

// react query hooks
import * as api from "../../hooks";

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

// components
import Error from '../../../../pages/_error';

// ts
interface Props {
    isfullScActive: boolean;
}

const CandleChart = ({ isfullScActive }: Props) => {
    const { detail } = useCoinDetailContext();

    // redux
    const { darkMode, height, width } = useSelector((state: State) => state.general);
    const { chartDay } = useSelector((state: State) => state.coin_detail);

    // react query
    const candleChart = api.useCoinCandleChart(detail.id, chartDay);
    const lineChart = api.useCoinLineChart(detail.id, chartDay);

    // minimum and maximum coin price
    const prices = lineChart.data?.prices.map(item => item[1])
    let minPrice = prices ? prices.sort((a, b) => a - b)[0] : 1000;
    let maxPrice = prices ? prices.sort((a, b) => b - a)[0] : 1000;

    // candle data
    const candle = candleChart.data?.map(item => {
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

    // loading
    if (candleChart.isLoading) {
        return <ChartSpinner />
    }

    // error
    if (candleChart.error) {
        return <Error errorMessage={candleChart.error.message} />
    }


    return (
        <>
            <ChartComponent id='detail-chart'
                primaryXAxis={primaryxAxis(darkMode)}
                primaryYAxis={primaryyAxis(darkMode, minPrice, maxPrice)}
                tooltip={tooltip}
                crosshair={crosshair(darkMode)}
                chartArea={chartArea}
                height={isfullScActive ? `${height}px` : "100%"}
                zoomSettings={zoomSetting}
                width={isfullScActive ? `${width}px` : "100%"}
                style={{ minHeight: 450, maxHeight: isfullScActive ? "100vh" : 454 }}
            >
                <Inject services={[CandleSeries, Category, Tooltip, StripLine, DateTime, Logarithmic, Crosshair, LineSeries, AccumulationDistributionIndicator, Zoom]} />
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
        </>
    )
}

export default CandleChart