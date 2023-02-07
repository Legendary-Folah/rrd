import { Link } from "react-router-dom"

const About = () => {
    return (
        <section className="section">
            <div>About Us</div>
            <Link to='/' className="btn">Home</Link>
        </section>
    );
};

export default About;