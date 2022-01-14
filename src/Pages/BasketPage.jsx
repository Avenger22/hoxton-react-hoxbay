import { useState } from "react/cjs/react.development"
import BasketItem from "../components/BasketItem"

function BasketPage(props) {

    const {basketProducts, setBasketProducts} = props 

    function calculateTotalBasket(baskedProductsParam) {

        let total = 0

        for (const product of baskedProductsParam) {
          total += Number(product.price) * product.quantity
        }
    
        return total.toFixed(2)

    }

    function handleOnChangeSelect(valueSelect, objectBasket) {

        const newObject = {...objectBasket, quantity: valueSelect} //find the index 

        const newArray = [...basketProducts, objectBasket]

        setBasketProducts(newArray)
    }

    // function calculateTotalBasketItem(productsParam) {

    //     let total = 0

    //     for (const product of productsParam) {
    //       total += Number(product.price) * Number(optionValueParam)
    //     }
    
    //     return total.toFixed(2)

    // }


    function filterTotalIndividual(productId) {
        const array = basketProducts.filter(item => item.id === productId)
        console.log(array)
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

                <h3>Your total: {calculateTotalBasket(basketProducts, )}</h3>

            </section>

        </main>

    )

}

export default BasketPage