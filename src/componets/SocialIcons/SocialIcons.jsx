import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import style from './SocialIcons.module.css'


const SocialIcons = () => {
    return (
        <div className={style.socialSection}>
            <div className={style.socialContainer}>
                <FiLinkedin className={style.social}/>
            </div>
            <div className={style.socialContainer}>
                <FaGithub className={style.social}/>
            </div>
            <div className={style.socialContainer}>
                <FiTwitter className={style.social}/>
            </div>
        </div>
    )
}

export default SocialIcons