import { Link, Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import StyledNavbr from '../styling/StyledNavbar'

const Home = () => {
    return (
        <>
        <StyledNavbr />
        <Outlet />
        </>
       
    )
}

export default Home