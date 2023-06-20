import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/Ai';
import style from './SocialIcons.module.css'


const SocialIcons = () => {
    return (
        <div className={style.socialSection}>
            <div className={style.socialContainer}>
                <FiLinkedin className={style.social}/>
            </div>
            <div className={style.socialContainer}>
                <AiOutlineGithub className={style.social}/>
            </div>
            <div className={style.socialContainer}>
                <FiTwitter className={style.social}/>
            </div>
        </div>
    )
}

export default SocialIcons