import style from './Projects.module.css'
import Project from './Project.jsx'
import Data from './ProjectsData.js'
import { BsFillLightningFill } from 'react-icons/bs';

const Projects = () => {
    console.log(Data)
    
    return (
        <div className={style.projects}>
            <h2>Projects<BsFillLightningFill className={style.projectDownArrow}/><BsFillLightningFill className={style.projectDownArrow}/></h2>
            <section className={style.projectsSection}>
                {
                    Data.map( project => (
                        <Project 
                            key={project.id}
                            project={project}
                        />
                    ))
                }
            </section>
        </div>
    )
}
export default Projects
