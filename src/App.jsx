import { useState } from 'react'

import './App.css'
import Landing from './pages/Landing'
import './bootstrap.min.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Viewdetails from './pages/Viewdetails'




function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route element={<Landing/>} path='/'/>
      <Route element={<Viewdetails/> }path='/viewdetails/:id'/>
    </Routes>
     {/* <Landing/> */}
    </>
  )
}

export default App
