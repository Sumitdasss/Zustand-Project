
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Rootlayout from './Componant/Layout/Rootlayout'
import Home from './Componant/Page/Home'
import Cartpage from './Componant/Page/Cartpage'

function App(){
 

  return (
    <>
    
<Routes>
<Route  element={<Rootlayout/>}>
<Route index element={<Home/>}/>
<Route path="/shop" element={<Cartpage/>}/>

</Route>

</Routes>

    </>
  )
}

export default App
