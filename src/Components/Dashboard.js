const Dashboard = ({ user }) => {
    return (
        <section className="section">
            <h3>Hello, Welcome {user?.name}.</h3>
        </section>
    )
}

export default Dashboard;