import { Link } from "react-router-dom"

function CategoryPage(props) {

    const {category} = props 

    return (

        <li>
            <Link to = {`/categories/${category.id}`}>
                {category.name}
            </Link>
        </li>

    )

}

export default CategoryPage