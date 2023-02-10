import { Link, useParams } from "react-router-dom"
import products from "../Data"

const SingleProduct = () => {
    
    const { productID } = useParams()
    const product = products.find((products) => product.id === 
    productID
    )
    return (
        <section className="section product">
            <h3>{productID}</h3>
            <Link to='/products'>Back to products</Link>
        </section>
    )
}
export default SingleProduct