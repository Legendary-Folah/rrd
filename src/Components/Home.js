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