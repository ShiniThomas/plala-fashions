import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Navigation from "../../components/navigation/navigation.component"

const NavBar = () =>{
  return (
    <Fragment>
      <Navigation/>
      <Outlet/>
    </Fragment>  
  )
}

export default NavBar