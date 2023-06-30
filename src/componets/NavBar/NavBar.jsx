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
                <a href='./index.html'><img className={style.logo} src={logo} alt={logo} /></a>
                <ul 
                className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}
                >
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#projectSection'>Projects</a>
                    </li>
                    <li>
                        <a href='#aboutSection'>About</a>
                    </li>
                    <li>
                        <a href='#contactSection'>Contact</a>
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