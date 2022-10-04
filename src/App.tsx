import React, { useEffect } from 'react'

// react router dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// redux
import coinsRequestFunc from './Redux/Coins/coinsActions'
import globalFetchRequest from './Redux/Global/globalActions'
import { useSelector, useDispatch } from 'react-redux'
import { State } from './Redux/store'

// mui
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Components/Mui/CustomizeColor'

// components
import Header from './Components/Header/Header'
import CoinsTabale from './Components/Coins/CoinsTabale'
import CoinDetail from './Components/Coins/Detail/CoinDetail'

const App = () => {
  const dispatch = useDispatch<any>();
  const general = useSelector((state: State) => state.general);
  const global = useSelector((state: State) => state.global);
  const coins = useSelector((state: State) => state.coins);

  useEffect(() => {
    dispatch(coinsRequestFunc(coins.page))
  }, [coins.page])

  useEffect(() => {
    dispatch(globalFetchRequest())
  }, [global.global?.updated_at])

  useEffect(() => {
    let root = document.getElementById("root") as HTMLDivElement
    root?.childNodes.forEach((item: any) => {

      if (general.darkMode) {
        item.style.borderBottom = "1px solid var(--border-color-dark)";
        item.style.backgroundColor = "var(--dark-bg-1)";
        item.style.color = "var(--color-light-neutral-3)";
      }
      else {
        item.style.borderBottom = "1px solid var(--border-color)";
        item.style.backgroundColor = "#fff";
        item.style.color = "var(--dark-bg-1)";
      }
    })

  }, [general.darkMode])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <Header />
        <Routes>
          <Route path='/' element={<CoinsTabale />} />
          <Route path="/coins/:coin_id" element={<CoinDetail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App