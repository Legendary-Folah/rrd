import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
        <NavLink 
            to='/' 
            style={({ isActive }) => {
                return { color: isActive ? 'red' : 'whitesmoke' }
            }}>
                Home
        </NavLink>
        <NavLink
            to='/about' 
            style={({ isActive }) => {
                return { color: isActive ? 'red' : 'whitesmoke' }
            }}>
                About Us
        </NavLink>
        <NavLink 
            to='/products' 
            style={({ isActive }) => {
                return { color: isActive ? 'red' : 'whitesmoke' }
            }}>
                Products
        </NavLink>
        <NavLink
            to='/login' 
            style={({ isActive }) => {
                return { color: isActive ? 'red' : 'whitesmoke' }
            }}>
                Log In
        </NavLink>
    </nav>
  )
}

export default NavBar