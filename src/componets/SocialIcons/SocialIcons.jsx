import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/Ai';
import style from './SocialIcons.module.css'


const SocialIcons = () => {
    return (
        <div>
            <FiLinkedin className={style.social}/>
            <AiOutlineGithub className={style.social}/>
            <FiTwitter className={style.social}/>
        </div>
    )
}

export default SocialIcons