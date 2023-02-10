import { Link, useParams } from "react-router-dom"
import products from "../Data"

const SingleProduct = () => {
    
    const { productID } = useParams()
    const product = products.find((product) => product.id === 
    productID);
    const { image, name } = product

    return (
        <section className="section product">
            <img src={image} alt={name}/>
            <h5>{name}</h5>
            <Link to='/products'>Back to products</Link>
        </section>
    )
}
export default SingleProduct