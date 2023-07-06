import style from './CaseStudy1.module.css'
import { FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa';
import blossom from '../../assets/images/whiteBlossom.png'

const CaseStudy1 = () => {
  return (
    <main>
      <hgroup>
        <h1>Be Well</h1>
        <h2>Be Well: Social Media App</h2>
      </hgroup>
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
                      <a href='https://www.linkedin.com/in/stephen-vizzusi-99882218b/' target="_blank"><FaLinkedin className={style.footerSocial}/></a>
                  </div>
                  <div className={style.caseStudyLinkContainer}>
                      <a href='https://github.com/svizzusi' target="_blank"><FaGithub className={style.footerSocial}/></a>
                  </div>
                  <div className={style.caseStudyLinkContainer}>
                      <a href='https://twitter.com/StephenVizzusi' target="_blank"><FaTwitter className={style.footerSocial}/></a>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <div className={style.imageContainer}>
        <img src={blossom} alt="Flower"/>
      </div>
      <section className={style.caseStudyImprovments}>
        <h3>Future Improvements</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non deserunt a accusamus! Consequatur, odio. Repellendus, ad. Esse nostrum accusamus est!</p>
      </section>
    </main>
  )
}

export default CaseStudy1