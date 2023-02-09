import { Link, Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Home = () => {
    return (
        <>
        <NavBar />
        <section className="section">
            <Outlet />
        </section>
        </>
       
    )
}

export default Home