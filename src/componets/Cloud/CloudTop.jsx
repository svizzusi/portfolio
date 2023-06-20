import cloud from '../../assets/images/cloud.png'
import style from './CloudTop.module.css'

const CloudTop = () => {
    return (
        <div className ={style.imageContainer}>
            <img className={style.cloudTop} src={cloud} />
        </div>
    )
}

export default CloudTop