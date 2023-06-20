import CloudBottom from "../Cloud/CloudBottom"
import CloudTop from "../Cloud/CloudTop"
import Hero from "../Hero/Hero"
import NavBar from "../NavBar/NavBar"
import Project from "../Projects/Projects"



const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <CloudTop />
        <CloudBottom />
        <Project />
    </>
  )
}

export default App