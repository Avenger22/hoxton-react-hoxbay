import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductDetailPage() {

    const params = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/products/${params.id}`)
          .then(resp => resp.json())
          .then(productFromServer => setProduct(productFromServer))
    }, [])

    if (product === null) return <main>Loading...</main>
    if (product.title === undefined) return <main>Product not found</main>

    // function handleButtonRedirect() {
    //     return 
    // }

    return (

        <main>

            <section className="product-detail main-wrapper">

                <img
                    src = {product.image}
                    alt = {product.description}
                />

                <div className="product-detail__side" style="border-color: var(--yellow);">

                    <h3></h3>
                    <h2>{product.title}</h2>

                    <p>
                        {product.description}
                    </p>

                    <p>{product.price}</p>

                    <button>
                    {/* // onClick={handleButtonRedirect}> */}
                        Add to basket
                    </button>

                </div>

            </section>

        </main>

    )

}

export default ProductDetailPage