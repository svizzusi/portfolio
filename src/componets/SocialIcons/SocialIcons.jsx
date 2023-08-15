import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
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
                <a href='https://twitter.com/StephenVizzusi' target="_blank"><FiTwitter className={style.social}/></a>
            </div>
        </div>
    )
}

export default SocialIcons