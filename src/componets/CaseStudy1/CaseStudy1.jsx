import style from './CaseStudy1.module.css'
import { FaLink, FaGithub} from 'react-icons/fa';
import blossom from '../../assets/images/whiteBlossom.png'

const CaseStudy1 = () => {
  return (
    <main>
      <hgroup>
        <h1>SmileSupply</h1>
        <h2>Dental Innovatory Tracking System</h2>
      </hgroup>
      <div className={style.imageContainer}>
        <img src={blossom} alt="Flower"/>
      </div>
      <section className={style.caseStudySection}>
        <div className={style.caseStudyAbout}>
          <h3>About this project</h3>
          <p>SmileSupply is our innovative full-stack inventory tracking system, developed using React, Node, Express, MongoDB, and Tailwind, revolutionizes inventory management for dental offices. With our user-friendly interface, dental offices can effortlessly input and manage their product inventory. What sets our app apart is the utilization of a cutting-edge algorithm tailored to each product, enabling precise tracking of usage patterns. This intelligent system ensures timely automatic reordering, adapting to the specific rate at which products are consumed. By preventing the wastage of expired items, dental offices can significantly reduce costs. Furthermore, our app guarantees that your inventory is always aligned with demand, optimizing your supply chain and ensuring you have the right products on hand to meet the unique needs of each dental office.</p>
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
                      <a href='https://www.linkedin.com/in/stephen-vizzusi-99882218b/' target="_blank"><FaLink className={style.footerSocial}/></a>
                  </div>
                  <div className={style.caseStudyLinkContainer}>
                      <a href='https://github.com/svizzusi' target="_blank"><FaGithub className={style.footerSocial}/></a>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudy1