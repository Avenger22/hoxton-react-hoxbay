import { Link } from "react-router-dom"

function CategoryPage(props) {

    const {category, setCategoryValue} = props 

    return (

        <li onClick={function() {
            setCategoryValue(category.id)
        }}>

            <Link to = {`/categories/${category.id}`}>
                {category.name}
            </Link>

        </li>

    )

}

export default CategoryPage