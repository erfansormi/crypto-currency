import React, { useEffect } from 'react'

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
        item.style.color = "var(--color-light-neutral-6)";
      }
    })

  }, [general.darkMode])

  return (
    <>
      <ThemeProvider theme={theme} >
        <Header />
        <CoinsTabale />
      </ThemeProvider>
    </>
  )
}

export default App