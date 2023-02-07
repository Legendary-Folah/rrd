import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to='/' >Home</Link>
        <Link to='/about' >About Us</Link>
        <Link to='/products' >Products</Link>
        <Link to='*' >Error</Link>
    </nav>
  )
}

export default NavBar