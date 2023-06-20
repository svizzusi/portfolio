import CloudBottom from "../Cloud/CloudBottom"
import CloudTop from "../Cloud/CloudTop"
import Hero from "../Hero/Hero"
import NavBar from "../NavBar/NavBar"



const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <CloudTop />
        <CloudBottom />
    </>
  )
}

export default App