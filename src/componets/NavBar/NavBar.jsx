import style from './NavBar.module.css'
import logo from '../../assets/images/logo.png'

const NavBar = () => {
    return (
        <header>
            <nav className={style.nav}>
                <img className={style.logo} src={logo} alt={logo} />
                <ul className={style.navLinks}>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar