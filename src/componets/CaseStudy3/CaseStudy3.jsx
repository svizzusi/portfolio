import style from './CaseStudy3.module.css'
import { FaLink, FaGithub} from 'react-icons/fa';
import dentaClinic from '../../assets/images/dentaClinic.gif'

const CaseStudy3 = () => {
  return (
    <main>
      <hgroup>
        <h1>Denta Clinic</h1>
        <h2>Denta Clinic: social media app</h2>
      </hgroup>
      <section className={style.caseStudySection}>
        <div className={style.caseStudyAbout}>
          <h3>About this project</h3>
          <p>"Denta Clinic website features a responsive design, integrated booking system, email newsletter capabilities, and customer support, showcasing a modern user interface, convenience, and exceptional detail."</p>
          <p>Introducing Denta Clinic, a dental office website that I recently deployed as a freelance project. This website boasts a responsive design, offering a seamless user experience across various devices. With an integrated booking system, patients can easily schedule appointments online, streamlining the process and enhancing convenience. The website also incorporates email newsletter capabilities, allowing the dental office to engage with patients and provide valuable updates. Furthermore, customer support is prioritized, ensuring that visitors can easily find the information they need and receive assistance when required. The modern user interface of Denta Clinic reflects attention to detail and a commitment to delivering a professional and welcoming experience.</p>
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
                      <a href='https://dentaclinic.netlify.app/' target="_blank"><FaLink className={style.footerSocial}/></a>
                  </div>
                  <div className={style.caseStudyLinkContainer}>
                      <a href='https://github.com/svizzusi/denta-clinic' target="_blank"><FaGithub className={style.footerSocial}/></a>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <div className={style.imageContainer}>
        <img src={dentaClinic} alt="Flower"/>
      </div>
      <section className={style.caseStudyImprovments}>
        <h3>Future Improvements</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non deserunt a accusamus! Consequatur, odio. Repellendus, ad. Esse nostrum accusamus est!</p>
      </section>
    </main>
  )
}

export default CaseStudy3