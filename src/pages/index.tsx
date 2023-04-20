import { useState } from "react";
import { createContext, useContext } from 'react';
import { GetStaticProps } from 'next';

// getApi
import { fetchCoins } from '../Components/Coins/fetchCoins'

// components
import CoinsTable from '../Components/Coins/CoinsTable';
import Head from 'next/head'
import Error from './_error';

// ts
import { iCoins, iCoinsInitialValues, HomeContextValues } from '../types/Coins/coinsTypes';

interface Props {
  coins: iCoins[],
  error: string
}

// context
const CoinsContext = createContext({} as HomeContextValues);
export const useCoinsContext = () => useContext(CoinsContext);

const Index = ({ coins, error }: Props) => {
  const [initialValues, setInitialValues] = useState<iCoinsInitialValues>({
    allCoins: coins,
    error,
    navigatedCoins: coins.slice(0, 30),
    page: 1,
    skip: 30
  })

  return (
    <CoinsContext.Provider value={{ initialValues, setInitialValues }}>
      {
        error ?
          <Error errorMessage={error} /> :
          <>
            <Head>
              <title>
                Crypto Currency | Home
              </title>
            </Head>
            <CoinsTable />
          </>
      }
    </CoinsContext.Provider>
  )
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const { coins, error } = await fetchCoins();

  return {
    props: {
      coins,
      error
    },
    revalidate: 10 * 60 // 10 minute
  }
}