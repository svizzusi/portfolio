import style from './CaseStudy1.module.css'
import { FaLink, FaGithub} from 'react-icons/fa';
import blossom from '../../assets/images/whiteBlossom.png'

const CaseStudy1 = () => {
  return (
    <main>
      <hgroup>
        <h1>Be Well</h1>
        <h2>Be Well: Social Media App</h2>
      </hgroup>
      <div className={style.imageContainer}>
        <img src={blossom} alt="Flower"/>
      </div>
      <section className={style.caseStudySection}>
        <div className={style.caseStudyAbout}>
          <h3>About this project</h3>
          <p>"Be Well is a social media app where people can connect with others about their fitness, diet, meditation goals, and overall well-being."</p>
        </div>
        <div className={style.caseStudyTechnologies}>
          <h4>TECHNOLOGIES</h4>
          <ul>
            <li>React</li>
            <li>Tailwind</li>
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