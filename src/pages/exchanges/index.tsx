import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'

// get api
import { fetchExchanges } from '../../Components/Exchanges/fetchExchanges'

// components
import Error from '../_error'
import ExchangesTable from '../../Components/Exchanges/Exchanges'

// redux
import { getExchanges } from '../../Redux/Exchanges/exchangesSlice'
import { useDispatch } from 'react-redux'

// ts type
import { iExchanges } from '../../Redux/Exchanges/exchangesSlice'

interface Props {
    error: string,
    exchanges: iExchanges[]
}

const Exchanges = ({ error, exchanges }: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExchanges(exchanges))
    }, [])

    return (
        <>
            {
                error ?
                    <Error errorMessage={error} /> :
                    <ExchangesTable />
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
        revalidate: 24 * 60 * 60
    }
}