import style from './CaseStudy1.module.css'
import { FaLink, FaGithub} from 'react-icons/fa';
import { SiLoom } from "react-icons/si";
import smileSupply from '../../assets/images/smileSupply.gif'
import figma from '../../assets/images/figma.png'

const CaseStudy1 = () => {
  return (
    <main>
      <hgroup>
        <h1>Smile Supply</h1>
        <h2>Dental Innovatory Tracking System</h2>
      </hgroup>
      <div >
        <img className={style.imageContainer} src={smileSupply} alt="Smile Supply"/>
      </div>
      <section className={style.caseStudySection}>
        <div className={style.caseStudyAbout}>
          <h3>About this project</h3>
          <p>SmileSupply is an inventory tracking system developed using React, Redux, NodeJs, Express, MongoDB, and Tailwind. The application redefines product inventory management, and patient appointment bookings for dental offices.</p>
          <p>The application has a user-friendly interface which makes it easy for inventory management. Dental offices can effortlessly input and manage their product inventory. What sets the application apart is the use of an algorithm tailored to each product, which enables precise tracking of usage patterns.</p>
          <p>The intelligent system of the application ensures timely automatic reordering, adapting to the specific rate at which products are consumed. This system helps to prevent wastage of expired items which in turn reduce costs significantly. </p>
          <p>Furthermore, the application guarantees that your inventory is always aligned with demand, optimizing your supply chain and ensuring you have the right products on hand to meet the needs of every dental office.</p>
          <p className={style.loomlink}>Check out a the demo video here: <a href='https://www.loom.com/share/516243a3716c48a2b5aae8892d03b6e2' target="_blank">Loom<SiLoom className={style.footerSocial}/></a></p>
          <div className={style.imageContainer2}>
            <img  
              className={style.imageContainerFigma} 
              src={figma} 
              alt="Smile Supply Figma"
            />
          </div>
        </div>
        <div className={style.caseStudyTechnologies}>
          <h4>TECHNOLOGIES</h4>
          <ul>
            <li>React</li>
            <li>MongoDB</li>
            <li>Node</li>
          </ul>
          <div className={style.caseStudyLinksContainer}>
            <h4>LINKS</h4>
            <div className={style.caseStudyLinks}>
                  <div className={style.caseStudyLinkContainer}>
                      <a href='https://smilesupply.net' target="_blank"><FaLink className={style.footerSocial}/></a>
                  </div>
                  <div className={style.caseStudyLinkContainer}>
                      <a href='https://github.com/svizzusi/smileSupplyFE' target="_blank"><FaGithub className={style.footerSocial}/></a>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudy1