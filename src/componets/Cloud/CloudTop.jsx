import cloud from '../../assets/images/cloud.png'
import style from './CloudTop.module.css'
import { BsFillLightningFill } from 'react-icons/bs';

const CloudTop = () => {
    return (
        <div className ={style.imageContainer}>
            <BsFillLightningFill className={style.cloudDownArrow1}/>
            <BsFillLightningFill className={style.cloudDownArrow2}/>
            <img className={style.cloudTop} src={cloud} />
        </div>
    )
}

export default CloudTop