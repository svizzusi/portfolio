import style from './Projects.module.css'
import Project from './Project.jsx'
import Data from './ProjectsData.js'

const Projects = () => {
    console.log(Data)
    
    return (
        <div className={style.projects}>
            <h2>Projects</h2>
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
                            lang4={project.lang4}
                        />
                    ))
                }
            </section>
        </div>
    )
}
export default Projects
