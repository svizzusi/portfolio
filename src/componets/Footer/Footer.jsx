import style from './Footer.module.css'
import { FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa';


const Footer = () => {
    return (
        <footer>
            <h3>Follow Me</h3>
            <div className={style.footerLinks}>
                <div className={style.footerContainer}>
                     <a href='https://www.linkedin.com/in/stephen-vizzusi' target="_blank"><FaLinkedin className={style.footerSocial}/></a>
                </div>
                <div className={style.footerContainer}>
                    <a href='https://github.com/svizzusi' target="_blank"><FaGithub className={style.footerSocial}/></a>
                </div>
                <div className={style.footerContainer}>
                    <a href='https://twitter.com/StephenVizzusi' target="_blank"><FaTwitter className={style.footerSocial}/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer