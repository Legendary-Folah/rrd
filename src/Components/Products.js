import { Link } from "react-router-dom";
import products from "../Data";

const Products = () => {
    return (
        <section className="section">
            <h2>Products</h2>
            <div className="products">
                {products.map((product) => {
                    return <article key={product.id}>
                        <h5>{product.name}</h5>
                    </article>
                })}
            </div>
            <Link to={`/products/${products.id}`}>more info</Link>
        </section>
    )
}

export default Products