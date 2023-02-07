import { Link, Outlet } from "react-router-dom"

const Home = () => {
    return (
        <section className="section">
            <div>Home Page</div>
            <br />
            <Outlet />
        </section>
    )
}

export default Home