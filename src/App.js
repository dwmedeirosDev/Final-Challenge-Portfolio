import React from 'react'
import { GlobalStyle } from './Global/global'
import Welcome from './Components/Welcome/Index'
import Obs from './Components/Obs/Index'

export default function App(){
  return(
    <>
      <GlobalStyle />
      {/* <Welcome /> */}
      <Obs />
    </>
  )
}