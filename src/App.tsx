import React, { useEffect } from 'react'

// redux
import coinsRequestFunc from './Redux/Coins/coinsActions'
import globalFetchRequest from './Redux/Global/globalActions'
import { useDispatch } from 'react-redux'
import Header from './Components/Header/Header'

const App = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(coinsRequestFunc())
  }, [])

  useEffect(() => {
    dispatch(globalFetchRequest())
  }, [])

  return (
    <>
      <Header />
    </>
  )
}

export default App