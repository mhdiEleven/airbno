import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Top_nav from './componenets/top-nav/top_nav'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main'
function App() {
  

  return (<><Top_nav />
  <Routes>
    <Route path='/' element={<Main/>}></Route>
  </Routes>
  </>)
}

export default App
