import './navbar.scss'
import logo from '/logo.svg'
import logoText from '/logo-text.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__logo">
        <a href="#">
          <img src={logo} alt="Logo" />
          <img src={logoText} alt="LogoText" />
        </a>
      </div>
      <nav className='navbar__menu'>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shows</a>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar