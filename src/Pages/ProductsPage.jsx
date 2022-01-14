import { Link } from 'react-router-dom'
import Product from '../components/Product'

function ProductsPage (props) {

    const {products, filteredProducts, setCategoryValue, categoryValue, searchTerm, setSearchTerm} = props 

    return (

        <main>

            <input type="text" name='input-serch' value={searchTerm} placeholder='Search Item' 
                onChange = {function (e) {
                    // e.preventDefault()
                    let title = e.target.value
                    // console.log(title)
                    setSearchTerm(title)
                }}/>

            <section className="products-container main-wrapper">

                {/* <Link className = "special-a" to="/home">
                    <button onClick = {function() {
                            const newObject = {...categoryValue, clicked: !categoryValue.clicked}
                            setCategoryValue(newObject)
                        }}>
                            Show All no filter
                    </button>
                </Link> */}

                <ul className="products-container__list">
                    
                    {

                        filteredProducts.map(product => 

                            <Product 
                                key = {product.id}
                                product = {product}
                            />

                        )

                    }
                   
                </ul>

            </section>

        </main>

    )

}

export default ProductsPage