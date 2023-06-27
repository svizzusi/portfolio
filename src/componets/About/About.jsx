import React from 'react'
import style from './About.module.css'
import { FiDownload } from 'react-icons/fi';
import profilePic from '../../assets/images/profilePic.jpg'

const About = () => {
  return (
    <div className={style.aboutContainer}>
        <section className={style.aboutSection}>
            <img className={style.aboutImage} src={profilePic}/>
            <div className={style.aboutText}>
                <h2>About <span>Me:</span></h2>
                <p data-aos="zoom-in" >I am a Fullstack Software Engineer from San Jose, CA. I consider myself a creative engineer who is efficient in delivering high-quality products. I am focused on the end-user and in providing the best possible experience when interacting with the UI. I work mostly with JavaScript, React and CSS, but I am also versed in back-end solutions and testing.</p>
                <button className={style.aboutButton}><FiDownload className={style.resume}/> Resume</button>
            </div>
        </section>
    </div>
  )
}

export default About