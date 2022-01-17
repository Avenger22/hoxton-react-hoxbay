import { useState } from "react/cjs/react.development"
import BasketItem from "../components/BasketItem"

function BasketPage(props) {

    const {basketProducts, setBasketProducts} = props 

    function calculateTotalBasket(baskedProductsParam) {

        let total = 0

        for (const product of baskedProductsParam) {
          total += Number(product.price) * Number(product.quantity)
        }
    
        return total.toFixed(2)

    }
    
    function handleOnChangeSelect(objectBasket) {

        let basketCopy = JSON.parse(JSON.stringify(basketProducts))
        
        const index = basketCopy.findIndex(target => target.id === objectBasket.id)
        const item = basketCopy[index]

        const newItem = {...objectBasket, quantity: objectBasket.quantity ? objectBasket.quantity + 1 : 1 }

        basketCopy[index] = newItem

        setBasketProducts(basketCopy)

    }

    function filterTotalIndividual(productId) {
        const array = basketProducts.filter(item => item.id === productId)        
        return array
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

                                calculateTotalBasket = {calculateTotalBasket}
                                filterTotalIndividual = {filterTotalIndividual}
                                handleOnChangeSelect = {handleOnChangeSelect}
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