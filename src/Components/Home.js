import { Link, Outlet } from "react-router-dom"

const Home = () => {
    return (
        <section className="section">
            <div>Home Page</div>
            <br />
            <Outlet />
            {/* <div><Link to='/about' className="btn">About Us</Link></div>
            <br />
            <div><Link to='/products' className='btn'>Products</Link></div> */}
        </section>
    )
}

export default Home