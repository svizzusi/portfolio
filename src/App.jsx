import CaseStudy1 from "./componets/CaseStudy1/CaseStudy1";
import CaseStudy2 from "./componets/CaseStudy2/CaseStudy2";
import CaseStudy3 from "./componets/CaseStudy3/CaseStudy3";
import Footer from "./componets/Footer/Footer"
import HomePage from "./componets/HomePage/HomePage";
import NavBar from "./componets/NavBar/NavBar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from "react-router-dom";

const App = () => {
  AOS.init({
    offset: 300,
    duration: 1000,
    easing: 'ease-in-sine'
  });
  return (
    <>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<HomePage />}></Route>
          <Route path={'/case-study-1'} element={<CaseStudy1 />}></Route>
          <Route path={'/case-study-2'} element={<CaseStudy2 />}></Route>
          <Route path={'/case-study-3'} element={<CaseStudy3 />}></Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App