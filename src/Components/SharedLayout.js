import { Link, Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import StyledNavbr from '../styling/StyledNavbar'

const SharedLayout = () => {
    return (
        <>
        <StyledNavbr />
        <Outlet />
        </>
       
    )
}

export default SharedLayout;