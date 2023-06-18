import style from './Hero.module.css'
import bg from '../../assets/images/bg.png'

const Hero = () => {
    return (
        <main className={style.main}>
            <div className={style.bg}>
                {/* <img className={style.bg} src={bg} alt={bg} /> */}
            </div>
            <div className={style.heroText}>
                <h2>Hello! I'm STEPHEN VI<span>ZZ</span>USI</h2>
                <h1>Software Engineer</h1>
                <p>I am a Full Stack Developer from San Jose, CA. I consider myself a creative engineer who is efficient in delivering high-quality products. I am focused on the end-user and in providing the best possible experience when interacting with the UI. I work mostly with JavaScript, React and CSS, but I am also versed in back-end solutions and testing.</p>
            </div>

        </main>
    )
}

export default Hero