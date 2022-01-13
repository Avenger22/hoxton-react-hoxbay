import Category from '../components/Category'

function CategoriesPage(props) {

    const {categories} = props  

    return (

        <main>

            <section className="categories-container main-wrapper">

                <ul className="categories-container__list">

                    {

                        categories.map(category => 

                            <Category 
                                key = {category.id}
                                category = {category}
                            />

                        )

                    }
                    
                </ul>

            </section>

        </main>

    )

}

export default CategoriesPage