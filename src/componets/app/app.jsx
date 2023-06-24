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
        
        <Project 
          img="../../assets/images/whiteBlossom.png"
          title="Be Well"
          details="BeWell is a social media app where people can connect with others about their fitness, diet, meditation goals, and overall well-being."
          lang1="REACT"
          lang2="MONGO DB"
          lang3="EXPRESS"
          lang4="NODE"
        />
        <Project 
          img="../../assets/images/whiteBlossom.png"
          title="King Motors"
          details=""
          lang1=""
          lang2=""
          lang3=""
          lang4=""
        />
        <Project 
          img="../../assets/images/whiteBlossom.png"
          title="Denta Clinic"
          details=""
          lang1=""
          lang2=""
          lang3=""
          lang4=""
        />
    </>
  )
}

export default App