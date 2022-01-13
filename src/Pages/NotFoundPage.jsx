import { Link } from 'react-router-dom'

function NotFoundPage() {

    return (

        <main>
            <h2>Not Found</h2>
            <p>Dont mess up with things in url !</p>
            <Link to='/home'>Go home, you're drunk</Link>
        </main>

    )

}

export default NotFoundPage