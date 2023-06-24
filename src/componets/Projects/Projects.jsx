import style from './Projects.module.css'
import risingBlossom from '../../assets/images/risingBlossom.png'
import whiteBlossom from '../../assets/images/whiteBlossom.png'

const Project = (props) => {
    return (
        <div className={style.projects}>
            <h2>Projects</h2>
            <section className={style.projectsSection}>
                <div className={style.projectsContainer}>
                    <img className={style.projectImage} src={props.img}/>
                    <h3>{props.title}</h3>
                    <p>{props.details}</p>
                    <span>{props.lang1}</span>
                    <span>{props.lang2}</span>
                    <span>{props.lang3}</span>
                    <span>{props.lang4}</span>
                    <button>CASE STUDY</button>
                    <button>LIVE</button>
                    <button>GITHUB</button>
                </div>
            </section>
        </div>
    )
}
    
    export default Project     
       
       
       
//        <div className={style.projects}>
//             <h2>Projects</h2>
//             <section className={style.projectsSection}>
//                 <div className={style.projectsContainer}>
//                     <img className={style.projectImage} src={risingBlossom}/>
//                     <h3>Be Well.</h3>
//                     <p>BeWell is a social media app where people can connect with others about their fitness, diet, meditation goals, and overall well-being.</p>
//                     <span>REACT</span>
//                     <span>MONGO DB</span>
//                     <span>EXPRESS</span>
//                     <span>NODE</span>
//                     <button>CASE STUDY</button>
//                     <button>LIVE</button>
//                     <button>GITHUB</button>
//                 </div>
//                 <div className={style.projectsContainer}>
//                     <img className={style.projectImage} src={whiteBlossom}/>
//                     <h3>King Motors</h3>
//                     <p>King Motors</p>
//                     <span>REACT</span>
//                     <span>MONGO DB</span>
//                     <span>EXPRESS</span>
//                     <span>NODE</span>
//                     <button>CASE STUDY</button>
//                     <button>LIVE</button>
//                     <button>GITHUB</button>
//                 </div>
//                 <div className={style.projectsContainer}>
//                     <img className={style.projectImage} src={whiteBlossom}/>
//                     <h3>Denta Clinic</h3>
//                     <p>Denta Clinic</p>
//                     <span>REACT</span>
//                     <span>MONGO DB</span>
//                     <span>EXPRESS</span>
//                     <span>NODE</span>
//                     <button>CASE STUDY</button>
//                     <button>LIVE</button>
//                     <button>GITHUB</button>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Project