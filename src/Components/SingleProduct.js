import { Link, useParams } from "react-router-dom"

const SingleProduct = () => {
    
    const { productID } = useParams()
    return (
        <section className="section product">
            <h3>Single Product page</h3>
            <Link to='/products'>Back to products</Link>
        </section>
    )
}
export default SingleProduct