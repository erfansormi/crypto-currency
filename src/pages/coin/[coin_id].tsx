import React, { useEffect } from 'react'

// next
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

// redux
import { fetchCoinChart, fetchCoinDetail, handleChartErr, handleDetailErr } from '../../Redux/CoinDetail/coinDetailSlice';
import { useDispatch } from 'react-redux';

// getApi
import { fetchApiCoinDetail } from '../../Components/CoinDetail/fetchCoinDetail';
import { fetchApiCoinChart } from '../../Components/CoinDetail/fetchCoinChart';

// components
import CoinDetailComponent from '../../Components/CoinDetail/CoinDetail';
import { CoinDetail, Chart } from '../../Redux/CoinDetail/coinDetailTypes';
import Error from '../_error';

interface Props {
    detail: CoinDetail,
    chart: Chart,
    detailErr: string,
    chartErr: string
}

const coinDetail = ({ detail, detailErr, chart, chartErr }: Props) => {
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

        if (detailErr) {
            dispatch(handleDetailErr(detailErr))
        }
        if (chartErr) {
            dispatch(handleChartErr(chartErr))
        }

        dispatch(fetchCoinChart(chart))
        dispatch(fetchCoinDetail(detail))
    }, [router.query.coin_id, router.query.chart_day])

    return (
        detailErr ?
            <Error errorMessage={detailErr} /> :
            <CoinDetailComponent />
    )
}

export default coinDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { coin_id, chart_day } = query;

    const { detail, detailErr } = await fetchApiCoinDetail(coin_id);
    const { chart, chartErr } = await fetchApiCoinChart(coin_id, chart_day ? chart_day : "1");

    return {
        props: {
            detail,
            detailErr,
            chart,
            chartErr,
        }
    }
}