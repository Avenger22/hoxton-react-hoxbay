import { Link } from "react-router-dom"

function CategoryPage(props) {

    const {category, categories, setCategories, setCategoriesChecked} = props 

    function handlerBtnLi() {

        setCategoriesChecked(category.id)
        // const newArrayCategories = [...categories, ]
        // setCategories()
        // window.location.href = '/categories'
    }
    return (

        <li onClick={function() {

        }}>
            {/* <Link to = {`/categories/${category.id}`}> */}
                {category.name}
            {/* </Link> */}
        </li>

    )

}

export default CategoryPage