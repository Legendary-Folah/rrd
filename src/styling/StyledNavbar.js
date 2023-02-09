import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about' >About Us</NavLink>
        <NavLink to='/products' >Products</NavLink>
    </nav>
  )
}

export default NavBar