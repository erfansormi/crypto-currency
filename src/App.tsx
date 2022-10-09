import { useEffect } from 'react'

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
import PageNotFound from './Components/Errors/PageNotFound/PageNotFound'

const App = () => {
  const dispatch = useDispatch<any>();
  const general = useSelector((state: State) => state.general);
  const global = useSelector((state: State) => state.global);
  const coins = useSelector((state: State) => state.coins);
  const detail = useSelector((state: State) => state.coin_detail);

  useEffect(() => {
    dispatch(coinsRequestFunc(coins.page))
  }, [coins.page, global.global?.updated_at, window.location.pathname])

  useEffect(() => {
    dispatch(globalFetchRequest())
  }, [global.global?.updated_at])

  useEffect(() => {
    let root = document.getElementById("root") as HTMLDivElement
    root?.childNodes.forEach((item: any) => {
      item.classList.add("root-nodes");
    })

  }, [coins.coins, detail.data, window.location])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <Header />
        <Routes>
          <Route path={`/`} element={<CoinsTabale />} />
          <Route path="/coins/:coin_id" element={<CoinDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App