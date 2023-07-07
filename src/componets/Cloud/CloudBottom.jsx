import cloud from '../../assets/images/cloud.png'
import sun from '../../assets/images/risingSun.png'
import style from './CloudBottom.module.css'



const CloudBottom = ({projectSectionRef}) => {
    const styleProjectObject = {
        width: "100px",
        height: "1px",
        position:'absolute',
        bottom: '150px'
    }
    return (
        <>
        <div style={styleProjectObject} id='projectSection' ref={projectSectionRef}></div>
        <div className = {style.imageContainer}>
            <img className={style.cloudBottom1} src={cloud} />
            <img className={style.risingSun} src={sun} />
            <img className={style.cloudBottom2} src={cloud} />
        </div>
        </>
    )
}

export default CloudBottom