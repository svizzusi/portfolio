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
                            img={project.img}
                            title={project.title}
                            details={project.details}
                            lang1={project.lang1}
                            lang2={project.lang2}
                            lang3={project.lang3}
                            dataAOS={project.dataAOS}
                        />
                    ))
                }
            </section>
        </div>
    )
}
export default Projects
