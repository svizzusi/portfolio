import style from './NavBar.module.css'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'


const NavBar = () => {
    const [navExpanded, setNavExpanded] = useState(false)

    const openNav = () => {
        setNavExpanded(!navExpanded)

    }
    return (
        <header>
            <nav className={style.nav}>
                <img className={style.logo} src={logo} alt={logo} />
                <ul 
                className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}
                >
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Projects</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
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