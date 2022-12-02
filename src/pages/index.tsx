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
import Error from './_error';

// ts
import { iCoins } from '../Redux/Coins/coinsTypes';

interface Props {
  coins: iCoins[],
  error: string
}

const Index = ({ coins, error }: Props) => {
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
      {
        error ?
          <Error errorMessage={error} /> :
          <>
            <Head>
              <title>
                Crypto Currency | Home
              </title>
            </Head>
            <CoinsTabale />
          </>
      }
    </>
  )
}

export default Index;

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