import { Link, Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import StyledNavbr from './'

const Home = () => {
    return (
        <>
        <NavBar />
        <Outlet />
        </>
       
    )
}

export default Home