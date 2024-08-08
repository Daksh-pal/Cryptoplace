import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Coin from './pages/coin/Coin'


// CG-hDrZbhwFp7sPemkA1Uk4yfYe   <--API KEY

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element= <Home/> />
        <Route path='/coin/:coinId' element= <Coin/> />
      </Routes>
    </div>
  )
}

export default App