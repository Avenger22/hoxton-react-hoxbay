import { Link } from "react-router-dom"

function Product(props) {

    const {product} = props 

    return (

        <li>

            <Link to = {`/products/${product.id}`}>

                <article className="product-item">
                    <img
                    src = {product.image}
                    alt = {product.description}
                    />
                    <h3>{product.title}</h3>
                </article>

            </Link>

        </li>

    )

}

export default Product