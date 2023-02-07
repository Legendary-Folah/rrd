import { Link, Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Home = () => {
    return (
        <>
        <NavBar />

        <section className="section">
            {/* <div>Home Page</div> */}
            <Outlet />
        </section>
        </>
       
    )
}

export default Home