import style from './Footer.module.css'
import { FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa';


const Footer = () => {
    return (
        <footer>
            <h3>Follow Me</h3>
            <div className={style.footerLinks}>
                <div className={style.footerContainer}>
                    <FaLinkedin className={style.footerSocial}/>
                </div>
                <div className={style.footerContainer}>
                    <FaGithub className={style.footerSocial}/>
                </div>
                <div className={style.footerContainer}>
                    <FaTwitter className={style.footerSocial}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer