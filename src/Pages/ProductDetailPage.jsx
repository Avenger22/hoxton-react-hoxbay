import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const randColour = ["green", "red", "blue", "yellow"][
    Math.floor(Math.random() * 4)
];

function ProductDetailPage(props) {


    const params = useParams()

    const [product, setProduct] = useState(null)

    const {basketProducts, setBasketProducts} = props 

    useEffect(() => {
        fetch(`http://localhost:8000/products/${params.id}`)
          .then(resp => resp.json())
          .then(productFromServer => setProduct(productFromServer))
    }, [])

    if (product === null) return <main>Loading...</main>
    if (product.title === undefined) return <main>Product not found</main>

    function handleButtonAddBasket(productParam) {

        const newProduct = {...productParam,  quantity: productParam.quantity? productParam.quantity + 1 : 1}
        const newBasketArray = [...basketProducts, newProduct]
        setBasketProducts(newBasketArray)

    }

    return (

        <main>

            <section className="product-detail main-wrapper">

                <img
                    src = {product.image}
                    alt = {product.description}
                />

                <div className="product-detail__side" style={{ borderColor: `var(--${randColour})` }}>

                    <h3></h3>

                    <h2>{product.title}</h2>

                    <p>
                        {product.description}
                    </p>

                    <p>{product.price}</p>

                    <button
                        onClick={
                            function () {
                                handleButtonAddBasket(product)
                            }}>
                        Add to basket
                    </button>

                </div>

            </section>

        </main>

    )

}

export default ProductDetailPage