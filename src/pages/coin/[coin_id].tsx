import React, { createContext, useContext } from 'react'

// next
import { GetServerSideProps } from 'next';
import Head from 'next/head';

// redux
import { CoinDetail } from '../../../types/Coins/coinDetail';

// getApi
import { fetchApiCoinDetail } from '../../Components/CoinDetail/fetchCoinDetail';

// components
import CoinDetailComponent from '../../Components/CoinDetail/CoinDetail';
import Error from '../_error';

interface Props {
    detail: CoinDetail,
    detailErr: string,
}

interface ContextType {
    detail: CoinDetail,
}

// context
const CoinDetailContext = createContext({} as ContextType);
export const useCoinDetailContext = () => useContext(CoinDetailContext);

const CoinDetail = ({ detail, detailErr }: Props) => {
    return (
        detailErr ?
            <Error errorMessage={detailErr} /> :
            <CoinDetailContext.Provider value={{ detail }}>
                <Head>
                    <title>
                        {detail.name} Detail
                    </title>
                </Head>
                <CoinDetailComponent />
            </CoinDetailContext.Provider>
    )
}

export default CoinDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.coin_id;

    const { detail, detailErr } = await fetchApiCoinDetail(id);

    return {
        props: {
            detail,
            detailErr,
        }
    }
}