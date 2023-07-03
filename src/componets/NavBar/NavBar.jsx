import style from './NavBar.module.css'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [navExpanded, setNavExpanded] = useState(false)

    const openNav = () => {
        setNavExpanded(!navExpanded)
    }
    
    return (
        <header>
            <nav className={style.nav}>
                <Link to={'/'}><img className={style.logo} src={logo} alt={logo} /></Link>
                <ul 
                className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}
                >
                    <li>
                    <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/#projectSection'}>Projects</Link>
                    </li>
                    <li>
                        <Link to={'/#aboutSection'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/#contactSection'}>Contact</Link>
                    </li>
                </ul>
                <div 
                    className={navExpanded ? `${style['icon-three']} ${style['active-three']}` : style['icon-three']}
                    onClick={openNav}
                >
                    <div className={`${style['hamburger']} ${style['hamburger-three']}`}></div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar