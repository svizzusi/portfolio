import style from './NavBar.module.css'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    const [navExpanded, setNavExpanded] = useState(false)

    const openNav = () => {
        setNavExpanded(!navExpanded)
    }
    const closeNav = () => setNavExpanded(false)

    return (
        <header>
            <nav className={style.nav}>
                <Link to={'/'}><img className={style.logo} src={logo} alt={logo} /></Link>
                <ul 
                className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}
                >
                    <li>
                        <span  
                            onClick={() => {props.scrollToHome(); closeNav()}}
                        >Home</span>
                    </li>
                    <li>
                        <span 
                            onClick={() => {props.scrollToProject(); closeNav()}}
                        >Projects</span>
                    </li>
                    <li>
                        <span 
                            onClick={() => {props.scrollToAbout(); closeNav()}}
                        >About</span>
                    </li>
                    <li>
                        <span 
                            onClick={() => {props.scrollToContact(); closeNav()}}
                        >Contact</span>
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