import { Fragment } from "react"
import { Link } from "react-router-dom"
import './navigation.scss'
import { ReactComponent as PlalaLogo } from "../../assets/crown.svg"

const Navigation = () =>{
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'><PlalaLogo/></Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Navigation