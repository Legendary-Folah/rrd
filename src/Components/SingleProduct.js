import { Link, useParams } from "react-router-dom"

const SingleProduct = () => {
    
    const { productID } = useParams()
    return (
        <section className="section product">
            <h3>Single Product page</h3>
        </section>
    )
}
export default SingleProduct