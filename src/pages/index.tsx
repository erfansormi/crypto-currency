import { useEffect } from 'react';
import { GetServerSideProps } from 'next'
import { useRouter } from "next/router"

// getApi
import { fetchCoins } from '../Components/Coins/fetchCoins'

// redux
import { useDispatch } from 'react-redux';
import { coinsFetchRequest } from '../Redux/Coins/coinsSlice'

// components
import CoinsTabale from '../Components/Coins/CoinsTabale';
import Head from 'next/head'

// ts
import { iCoins } from '../Redux/Coins/coinsTypes';
import Error from './_error';

interface Props {
  coins: iCoins[],
  error: any
}

const index = ({ coins, error }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch()

  useEffect(() => {
    if (!router.query.page) {
      router.push({
        query: {
          page: "1"
        }
      })
    }
    if (coins) {
      dispatch(coinsFetchRequest(coins))
    }
  }, [router.query.page])

  return (
    <>
      <Head>
        <title>
          Crypto Currency | Home
        </title>
      </Head>
      {
        error ?
          <Error errorMessage={error} /> :
          <CoinsTabale />
      }
    </>
  )
}

export default index;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page } = query;
  const { coins, error } = await fetchCoins(page ? page : "1")


  return {
    props: {
      coins,
      error
    }
  }
}