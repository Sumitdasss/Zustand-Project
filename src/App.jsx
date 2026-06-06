
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Rootlayout from './Componant/Layout/Rootlayout'
import Home from './Componant/Page/Home'
import Cartpage from './Componant/Page/Cartpage'
import Wishlist from './Componant/Page/Wishlist'
import ProductDetail from './Componant/Page/ProductDetails.'
import CheckoutPage from './Componant/Page/Cheakout'

function App(){
 

  return (
    <>
    
<Routes>
<Route  element={<Rootlayout/>}>
<Route index element={<Home/>}/>
<Route path="/shop" element={<Cartpage/>}/>
<Route path="/wishlist" element={<Wishlist/>}/>
<Route path="/productdetails/:id" element={<ProductDetail/>}/>
  <Route path="/checkout" element={<CheckoutPage/>}/>

</Route>

</Routes>

    </>
  )
}

export default App
