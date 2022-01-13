import { Link } from "react-router-dom"

function CategoryPage(props) {

    const {category} = props 

    return (

        <li>
            <Link to = {`/categories/${category.id}`}>
                electronics
            </Link>
        </li>

    )

}

export default CategoryPage