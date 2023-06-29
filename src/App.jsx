import About from "./componets/About/About"
import CloudBottom from "./componets/Cloud/CloudBottom"
import CloudTop from "./componets/Cloud/CloudTop"
import Form from "./componets/Form/Form"
import Footer from "./componets/Footer/Footer"
import Hero from "./componets/Hero/Hero"
import NavBar from "./componets/NavBar/NavBar"
import Projects from "./componets/Projects/Projects"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init({
    offset: 300,
    duration: 1000,
    easing: 'ease-in-sine'
  });
  return (
    <>
        <NavBar />
        <Hero />
        <CloudTop />
        <CloudBottom />
        <Projects />
        <About />
        <Form />
        <Footer />
    </>
  )
}

export default App