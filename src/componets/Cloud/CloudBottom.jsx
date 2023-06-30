import cloud from '../../assets/images/cloud.png'
import sun from '../../assets/images/risingSun.png'
import style from './CloudBottom.module.css'

const CloudBottom = () => {
    return (
        <div className = {style.imageContainer}>
            <img className={style.cloudBottom1} src={cloud} />
            <img id='projectSection' className={style.risingSun} src={sun} />
            <img className={style.cloudBottom2} src={cloud} />
        </div>
    )
}

export default CloudBottom