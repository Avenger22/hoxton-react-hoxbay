import { Link } from 'react-router-dom'

const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header() {

  return (

    <header
      className="header"
      style={{ ['--border-colour']: `var(--${randColour})` }}
    >

      <div className="header__logo" style={{ color: `var(--${randColour})` }}>
        Hoxbay

        <Link to='/home'>
            Home
        </Link>

      </div>

      <nav className="header__nav">

        <ul>

          <li>
            <Link to='/home'>Home</Link>
          </li>

          <li>
            <Link to='/products'>Products</Link>
          </li>

          <li>
            <Link to='/categories'>Categories</Link>
          </li>

          <li>
            <Link to='/basket'>Basket</Link>
          </li>
          
        </ul>

      </nav>

    </header>

  )
}

export default Header