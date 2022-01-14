import { Link } from "react-router-dom"

function CategoryPage(props) {

    const {category, setCategoryValue, categoryValue} = props 

    return (

        <li onClick={function() {
            const newObject = {value: category.id, clicked: !categoryValue.clicked}
            setCategoryValue(newObject)
        }}>

            <Link to = {`/categories/${category.id}`}>
                {category.name}
            </Link>

        </li>

    )

}

export default CategoryPage