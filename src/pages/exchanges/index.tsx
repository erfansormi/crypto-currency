import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

// get api
import { fetchExchanges } from '../../Components/Exchanges/fetchExchanges'

// components
import Error from '../_error'
import ExchangesTable from '../../Components/Exchanges/Exchanges';

// ts type
import { Exchanges } from '../../types/exchanges/exchanges';

interface Props {
    error: string,
    exchanges: Exchanges[]
}

const Exchanges = ({ error, exchanges }: Props) => {
    return (
        <>
            {
                error ?
                    <Error errorMessage={error} /> :
                    <>
                        <Head>
                            <title>
                                Exchanges List
                            </title>
                        </Head>
                        <ExchangesTable exchanges={exchanges} />
                    </>
            }
        </>
    )
}

export default Exchanges;

export const getStaticProps: GetStaticProps = async () => {
    const { error, exchanges } = await fetchExchanges();

    return {
        props: {
            error,
            exchanges
        },
        revalidate: 24 * 60 * 60 //24 hour
    }
}