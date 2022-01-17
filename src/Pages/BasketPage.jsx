import { useState } from "react/cjs/react.development"
import BasketItem from "../components/BasketItem"

function BasketPage(props) {

    const { products, setProducts } = props

    function calculateTotalBasket(baskedProductsParam) {

        let total = 0

        for (const product of baskedProductsParam) {
            total += Number(product.price) * Number(product.quantity)
        }

        return total.toFixed(2)

    }

    function handleOnChangeSelect(value, objectBasket) {
        let basketCopy = JSON.parse(JSON.stringify(products))

        const index = basketCopy.findIndex(target => target.id === objectBasket.id)
        const item = basketCopy[index]

        const newItem = { ...item, quantity: parseInt(value) }

        basketCopy[index] = newItem

        setProducts(basketCopy)

    }

    function filterTotalIndividual(productId) {
        const array = products.filter(item => item.id === productId)
        return array
    }

    return (

        <main>

            <section className="basket-container">

                <h2>Your Basket</h2>

                <ul>

                    {

                        products.map(product =>

                            <BasketItem
                                key={product.id}
                                product={product}

                                calculateTotalBasket={calculateTotalBasket}
                                filterTotalIndividual={filterTotalIndividual}
                                handleOnChangeSelect={handleOnChangeSelect}
                            />

                        )

                    }

                </ul>

                <h3>Your total: {calculateTotalBasket(products)}</h3>

            </section>

        </main>

    )

}

export default BasketPage