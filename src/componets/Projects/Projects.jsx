import style from './Projects.module.css'
import Project from './Project.jsx'
import Data from './ProjectsData.js'
import { BsFillLightningFill } from 'react-icons/bs';
import img1 from '../../assets/images/whiteBlossom.png'

const Projects = () => {
    console.log(Data)
    
    return (
        <div className={style.projects}>
            <h2>Projects<BsFillLightningFill className={style.projectDownArrow}/><BsFillLightningFill className={style.projectDownArrow}/></h2>
            <section className={style.projectsSection}>
                <Project 
                            id =  {1}
                            img = {img1}
                            title = "COMING SOON: Be Well"
                            details = "Be Well is a social media app where people can connect with others about their fitness, diet, meditation goals, and overall well-being."
                            lang1 = "REACT"
                            lang2 = "TAILWIND"
                            lang3 = "NODE"
                            link = '/case-study-1'
                            live = 'https://stephenvizzusi.vercel.app/'
                            github = 'https://stephenvizzusi.vercel.app/'
                            dataAOS =  'zoom-in-up'
                />
                <Project />
                <Project />
                {
                    // Data.map( project => (
                    //     <Project 
                    //         key={project.id}
                    //         project={project}
                    //     />
                    // ))
                }
            </section>
        </div>
    )
}
export default Projects
