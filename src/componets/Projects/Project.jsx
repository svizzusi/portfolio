import React from 'react'
import style from './Projects.module.css'
import { Link } from 'react-router-dom'

const Project = (props) => {
  return (
    <div className={style.projectsContainer} data-aos={`${props.dataAOS}`}> 
        <img className={style.projectImage} src={props.img} alt={props.title}/>
        <div className={style.projectBox}>
            <h3>{props.title}</h3>
            <p>{props.details}</p>
            <div className={style.lang}>
                <span>{props.lang1}</span>
                <span>{props.lang2}</span>
                <span>{props.lang3}</span>
            </div>
            <div className={style.projectBtns}>
                <Link to={props.link} target="_blank" rel="noopener noreferrer"><button>CASE STUDY</button></Link>
                <a href={props.live} target="_blank" rel="noopener noreferrer"><button>LIVE</button></a>
                <a href={props.github} target="_blank" rel="noopener noreferrer"><button>GITHUB</button></a>
            </div>
        </div>
    </div>
  )
}

export default Project