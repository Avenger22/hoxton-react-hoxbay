function BasketItem(props) {

    const {product, setOptionValue, calculateTotalBasketFiltered, filterTotalIndividual} = props 

    const totalIndividualArray = filterTotalIndividual(product.id)

    return (

        <li>

            <article className="basket-container__item">

                <img
                    src = {product.image}
                    alt = {product.description}
                    width="90"
                />

                <p>{}</p>

                <p>
                    Quantity:

                    <select name = "total-options" onChange={function (e) {
                                setOptionValue(e.target.value)
                    }}>
                            
                        <option value="0">
                            0
                        </option>

                        <option value="1">
                            1
                        </option>
                            
                        <option value="2">
                            2
                        </option>

                        <option value="3">
                            3
                        </option>

                    </select>

                </p>
                
                <p>Item total: {calculateTotalBasketFiltered(totalIndividualArray)}</p>

            </article>

        </li>

    )

}

export default BasketItem