import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <section className="section">
                <h1>404</h1>
                <p>Page not found!</p>
                <Link to='/'>Back Home</Link>
            </section>
        </div>
    );
};

export default Error;