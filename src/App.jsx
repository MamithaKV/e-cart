
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Cart from './pages/Cart'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/wishlist' element={<Wishlist/>}/>
<Route path='/:id/view' element={<View/>}/>

<Route path='/cart' element={<Cart/>}/>
{/* not include above url if separate  url comes show pnf page so put path as* */}
<Route path='/*' element={<Pnf/>}/>
    </Routes>
  <Footer/>
    </>
  )
}

export default App