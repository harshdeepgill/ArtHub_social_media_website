import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import PricingPage from '../Pages/PricingPage'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>

    </Routes>
  )
}
