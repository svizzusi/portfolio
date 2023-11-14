import style from './CaseStudy2.module.css'
import { FaLink, FaGithub} from 'react-icons/fa';
import kingMotors from '../../assets/images/kingMotors.gif'

const CaseStudy2 = () => {
  return (
    <main>
      <hgroup>
        <h1>King Motors</h1>
        <h2>King Motors: E-Commerce Website</h2>
      </hgroup>
      <div>
        <img className={style.imageContainer} src={kingMotors} alt="website gif"/>
      </div>
      <section className={style.caseStudySection}>
        <div className={style.caseStudyAbout}>
          <h3>About this project</h3>
          <p>King Motors showcases a meticulously crafted, fully responsive E-Commerce web application with a clean UI experience. The platform presents an exquisite add-to-cart functionality, customer support, and a booking system.</p>
          <p>I created this project to showcase my software engineering UI skills and highlighting my passion for classic cars and unique frontend development. The website offers a seamless user experience through a sleek checkout form, enhanced by JavaScript functionalities such as form validation and a submission pop-up. To showcase a collection of classic cars, I implemented a dynamic car inventory API, enabling users to populate the checkout page with a single click. The inventory is visually engaging, with hover effects that reveal and conceal captivating backgrounds. To improve navigation, I incorporated a stylish hamburger menu, ensuring easy exploration of different sections on various devices. One of my proudest achievements is the interactive pop-up modal for submissions, providing users with valuable feedback upon information submission. I encourage you to visit King Motors and personally experience these exciting features.</p>
        </div>
        <div className={style.caseStudyTechnologies}>
          <h4>TECHNOLOGIES</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className={style.caseStudyLinksContainer}>
            <h4>LINKS</h4>
            <div className={style.caseStudyLinks}>
                  <div className={style.caseStudyLinkContainer}>
                      <a href='https://king-motors.netlify.app/' target="_blank"><FaLink className={style.footerSocial}/></a>
                  </div>
                  <div className={style.caseStudyLinkContainer}>
                      <a href='https://github.com/svizzusi/king-motors' target="_blank"><FaGithub className={style.footerSocial}/></a>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudy2