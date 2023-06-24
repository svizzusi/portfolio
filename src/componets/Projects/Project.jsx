import React from 'react'
import style from './Projects.module.css'

const Project = (props) => {
  return (
    <div className={style.projectsContainer}>
        <img className={style.projectImage} src={props.img} alt={props.title}/>
        <div className={style.projectBox}>
            <h3>{props.title}</h3>
            <p>{props.details}</p>
            <div className={style.lang}>
                <span>{props.lang1}</span>
                <span>{props.lang2}</span>
                <span>{props.lang3}</span>
                <span>{props.lang4}</span>
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