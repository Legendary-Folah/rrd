import { Link } from "react-router-dom"
import products from "../Data"

const Products = () => {
    return (
        <section className="section">
            <div>Products Page</div>
            <Link to='/' className="btn">Home</Link>
        </section>
    )
}

export default Products