import { FiLinkedin} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import style from './SocialIcons.module.css'


const SocialIcons = () => {
    return (
        <div className={style.socialSection}>
            <div className={style.socialContainer}>
               <a href='https://www.linkedin.com/in/stephen-vizzusi' target="_blank"> <FiLinkedin className={style.social}/></a>
            </div>
            <div className={style.socialContainer}>
                <a href='https://github.com/svizzusi' target="_blank"><FaGithub className={style.social}/></a>
            </div>
            <div className={style.socialContainer} >
                <a href='mailto:svizzusi13@gmail.com'><FaEnvelope className={style.social}/></a>
            </div>
        </div>
    )
}

export default SocialIcons