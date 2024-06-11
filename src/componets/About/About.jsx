import React from 'react'
import style from './About.module.css'
import { FiDownload } from 'react-icons/fi'
import profilePic from '../../assets/images/profilePic.jpg'
import Resume from '../../assets/images/StephenVizzusiResume2024.pdf'

const About = ({aboutSectionRef}) => {

  const downloadFile = () => {
    const fileUrl = Resume;
    window.open(fileUrl, "_blank")
    }
    
  return (
    <div id='aboutSection' ref={aboutSectionRef} className={style.aboutContainer}>
        <section className={style.aboutSection}>
            <img className={style.aboutImage} src={profilePic}/>
            <div className={style.aboutText}>
                <h2>About <span>Me:</span></h2>
                <p data-aos="zoom-in" >I'm a Fullstack Software Engineer hailing from San Jose, CA. I thrive on creativity and efficiency, always aiming to deliver standout products. My passion lies in crafting stellar user experiences and intuitive UIs. While my main toolkit includes JavaScript, React, and CSS, I'm equally adept at back-end solutions and rigorous testing.</p>
                <button 
                  onClick={downloadFile} 
                  download  
                  className={style.aboutButton}>
                <FiDownload className={style.resume}/> 
                Resume</button>
            </div>
        </section>
    </div>
  )
}

export default About