import Product from '../components/Product'

function ProductsPage (props) {

    const {products} = props 
    
    return (

        <main>

            <section className="products-container main-wrapper">

                <ul className="products-container__list">

                    {

                        products.map(product => {

                            <Product 
                                key = {product.id}
                                product = {product}
                            />

                        })

                    }
                   
                </ul>

            </section>

        </main>

    )

}

export default ProductsPage