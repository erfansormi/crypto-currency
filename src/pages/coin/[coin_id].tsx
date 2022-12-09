import React, { useEffect } from 'react'

// next
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

// redux
import { fetchCoinChart, fetchCoinDetail, handleChartErr, fetchCoinCandle } from '../../Redux/CoinDetail/coinDetailSlice';
import { useDispatch } from 'react-redux';
import { CoinDetail, Chart } from '../../Redux/CoinDetail/coinDetailTypes';

// getApi
import { fetchApiCoinDetail } from '../../Components/CoinDetail/fetchCoinDetail';
import { fetchApiCoinChart } from '../../Components/CoinDetail/fetchCoinChart';

// components
import CoinDetailComponent from '../../Components/CoinDetail/CoinDetail';
import Error from '../_error';

interface Props {
    detail: CoinDetail,
    chart: Chart,
    detailErr: string,
    chartErr: string,
    candleChart: number[][]
}

const CoinDetail = ({ detail, detailErr, chart, chartErr, candleChart }: Props) => {
    const router = useRouter();

    // redux
    const dispatch = useDispatch();

    useEffect(() => {
        if (!router.query.chart_day) {
            router.push({
                query: {
                    chart_day: "1",
                    coin_id: detail.id
                }
            })
        }

        if (chartErr) {
            dispatch(handleChartErr(chartErr))
        }

        dispatch(fetchCoinChart(chart))
        dispatch(fetchCoinDetail(detail))
        dispatch(fetchCoinCandle(candleChart))
    }, [router.query.coin_id, router.query.chart_day])

    return (
        detailErr ?
            <Error errorMessage={detailErr} /> :
            <>
                <Head>
                    <title>
                        {detail.name ? detail.name : "Coin"} Detail
                    </title>
                </Head>
                <CoinDetailComponent />
            </>
    )
}

export default CoinDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { coin_id, chart_day } = query;

    const { detail, detailErr } = await fetchApiCoinDetail(coin_id);
    const { chart, chartErr, candleChart } = await fetchApiCoinChart(coin_id, chart_day ? chart_day : "1");

    return {
        props: {
            detail,
            detailErr,
            chart,
            chartErr,
            candleChart
        }
    }
}