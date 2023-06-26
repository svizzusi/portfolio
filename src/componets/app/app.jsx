import About from "../About/About"
import CloudBottom from "../Cloud/CloudBottom"
import CloudTop from "../Cloud/CloudTop"
// import Form from "../Form/Form"
import Hero from "../Hero/Hero"
import NavBar from "../NavBar/NavBar"
import Projects from "../Projects/Projects"
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
        {/* <Form /> */}
    </>
  )
}

export default App