import { useState } from "react/cjs/react.development"
import BasketItem from "../components/BasketItem"

function BasketPage(props) {

    const {basketProducts, setBasketProducts} = props 

    const [optionValue, setOptionValue] = useState('')

    function calculateTotalBasket(basketProductsParam) {

        let total = 0

        for (const product of basketProductsParam) {
          total += Number(product.price) * Number(optionValue)
        }
    
        return total.toFixed(2)

    }

    function calculateTotalBasketFiltered(basketProductsParam) {

        let total = 0

        for (const product of basketProductsParam) {
          total += Number(product.price) * Number(optionValue)
        }
    
        return total.toFixed(2)

    }

    function filterTotalIndividual(productId) {
        return basketProducts.filter(item => item.id === productId)
    }

    return (

        <main>

            <section className="basket-container">

                <h2>Your Basket</h2>

                <ul>

                    {

                        basketProducts.map(product => 
                            
                            <BasketItem 
                                key = {product.id}
                                product = {product}

                                setOptionValue = {setOptionValue}
                                calculateTotalBasketFiltered = {calculateTotalBasketFiltered}

                                filterTotalIndividual = {filterTotalIndividual}
                            />
                            
                        )

                    }
                    
                </ul>

                <h3>Your total: {calculateTotalBasket(basketProducts)}</h3>

            </section>

        </main>

    )

}

export default BasketPage