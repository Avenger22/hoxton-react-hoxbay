import { Link } from 'react-router-dom'
import Category from '../components/Category'

function CategoriesPage(props) {

    const {categories, setCategoryValue, categoryValue} = props 

    return (

        <main>

            <section className="categories-container main-wrapper">

                <Link className = "special-a" to="/home">
                    <button onClick = {function() {
                            const newObject = {...categoryValue, clicked: !categoryValue.clicked}
                            setCategoryValue(newObject)
                        }}>
                            Go back
                    </button>
                </Link>

                <ul className="categories-container__list">

                    {

                        categories.map(category => 

                            <Category 
                                key = {category.id}
                                category = {category}

                                setCategoryValue = {setCategoryValue}
                                categoryValue = {categoryValue}
                            />

                        )

                    }
                    
                </ul>

            </section>

        </main>

    )

}

export default CategoriesPage