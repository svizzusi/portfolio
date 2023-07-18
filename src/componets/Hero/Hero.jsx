import style from './Hero.module.css'
import SocialIcons from '../SocialIcons/SocialIcons'
import { Link } from 'react-router-dom'

const Hero = (props) => {
        return (
        <main className={style.main} ref={props.homeSectionRef}>
            <div className={style.heroText}>
                <h1>Fullstack <span>Software Engineer</span></h1>
                <h2>Hello! I'm STEPHEN VI<span>ZZ</span>USI</h2>
                <p>I'm a creative Full Stack Developer from San Jose, CA, skilled in delivering high-quality products. My focus is on providing the best possible user experience while interacting with the UI. I specialize in JavaScript, React, and CSS for front-end development, but I also excel in back-end solutions and testing.</p>
                <SocialIcons />
            </div>
        </main>
    )
}

export default Hero