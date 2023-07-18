import { useRef, useEffect} from "react";
import CaseStudy1 from "./componets/CaseStudy1/CaseStudy1.jsx";
import CaseStudy2 from "./componets/CaseStudy2/CaseStudy2.jsx";
import CaseStudy3 from "./componets/CaseStudy3/CaseStudy3.jsx";
import Footer from "./componets/Footer/Footer"
import HomePage from "./componets/HomePage/HomePage";
import NavBar from "./componets/NavBar/NavBar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

const App = () => {
  const navigate = useNavigate()
  const homeSectionRef = useRef()
  const projectSectionRef = useRef()
  const aboutSectionRef = useRef()
  const contactSectionRef = useRef()
  const location = useLocation();

    // Home scroll
    const scrollHomeSectionRef = () => {
      homeSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
    const scrollToHome = () => {
      navigate('/', {
        state: { scrollToHomeSection: true },
      });
    };
    
  useEffect(() => {
    if (location.state?.scrollToHomeSection) {
      scrollHomeSectionRef();
    }
  }, [location.state]);

  // project scroll
  const scrollProjectSectionRef = () => {
    projectSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  const scrollToProject = () => {
    navigate('/', {
      state: { scrollToProjectSection: true },
    });
  };
  
useEffect(() => {
  if (location.state?.scrollToProjectSection) {
    scrollProjectSectionRef();
  }
}, [location.state]);
  
// About scroll
const scrollAboutSectionRef = () => {
    aboutSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  const scrollToAbout = () => {
    navigate('/', {
      state: { scrollToAboutSection: true },
    });
  };
  
useEffect(() => {
  if (location.state?.scrollToAboutSection) {
    scrollAboutSectionRef();
  }
}, [location.state]);

// Contact scroll
  const scrollContactSectionRef = () => {
    contactSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  const scrollToContact = () => {
    navigate('/', {
      state: { scrollToContactSection: true },
    });
  };
  
useEffect(() => {
  if (location.state?.scrollToContactSection) {
    scrollContactSectionRef();
  }
}, [location.state]);

  AOS.init({
    offset: 300,
    duration: 1000,
    easing: 'ease-in-sine'
  });

  return (
    <>
        <NavBar 
          scrollToHome={scrollToHome} 
          scrollToProject={scrollToProject} 
          scrollToAbout={scrollToAbout} 
          scrollToContact={scrollToContact}/>
        <Routes>
          <Route 
              path={'/'} 
              element={<HomePage 
              homeSectionRef={homeSectionRef}
              projectSectionRef={projectSectionRef}
              aboutSectionRef={aboutSectionRef}
              contactSectionRef={contactSectionRef}
            />}></Route>
          <Route path={'case-study-1'} element={<CaseStudy1 />}></Route>
          <Route path={'case-study-2'} element={<CaseStudy2 />}></Route>
          <Route path={'case-study-3'} element={<CaseStudy3 />}></Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App