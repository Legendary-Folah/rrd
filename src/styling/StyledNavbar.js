import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
        <NavLink 
            to='/' 
            style={({ isActive }) => {
                return { color: isActive ? 'red' : 'grey' }
            }}>
                Home
        </NavLink>
        <NavLink
            to='/about' 
            style={({ isActive }) => {
                return { color: isActive ? 'red' : 'grey' }
            }}>
                About Us</NavLink>
        <NavLink to='/products' >Products</NavLink>
    </nav>
  )
}

export default NavBar