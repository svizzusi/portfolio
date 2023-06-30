import React from 'react'
import style from './Projects.module.css'

const Project = (props) => {
  return (
    <div className={style.projectsContainer} data-aos={`${props.project.dataAOS}`}> 
        <img className={style.projectImage} src={props.project.img} alt={props.project.title}/>
        <div className={style.projectBox}>
            <h3>{props.project.title}</h3>
            <p>{props.project.details}</p>
            <div className={style.lang}>
                <span>{props.project.lang1}</span>
                <span>{props.project.lang2}</span>
                <span>{props.project.lang3}</span>
            </div>
            <div className={style.projectBtns}>
                <button>CASE STUDY</button>
                <button>LIVE</button>
                <button>GITHUB</button>
            </div>
        </div>
    </div>
  )
}

export default Project