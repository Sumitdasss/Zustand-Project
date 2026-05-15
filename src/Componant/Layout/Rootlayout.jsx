import { Outlet } from "react-router-dom"
import Fotter from "./Fotter"
import Heading from "./Heading"


const Rootlayout = () => {
  return (
  <>
  <Heading/>
<Outlet/>
  <Fotter/>
  
  
  </>
  )
}

export default Rootlayout