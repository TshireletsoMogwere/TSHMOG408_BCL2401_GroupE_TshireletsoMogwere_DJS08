import React from "react"
import {Link, NavLink} from "react-router-dom"
import imageUrl from "../../assets/images/avatar-icon.png"


function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

function fakeLogOut() {
  localStorage.removeItem("loggedin")
}
return (
<header>
    <Link to="login" className="login-link">
                    <img src={imageUrl} className="login-icon" />
            </Link>
      <Link className="site-logo" to="/">#VANLIFE</Link>
      <nav>
      <NavLink to="/host"  className={({isActive}) => isActive ? "active-link" : null}>
        Host
      </NavLink>

      <NavLink  to="/about" className={({isActive}) => isActive ? "active-link" : null}>
        About
      </NavLink>

      <NavLink to="/vans" className={({isActive}) => isActive ? "active-link" : null}>
        Vans
      </NavLink>
            <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
)
}

export default Header