import React from 'react'
import About from "../About/About"
import CloudBottom from "../Cloud/CloudBottom"
import CloudTop from "../Cloud/CloudTop"
import Form from "../Form/Form"
import Hero from "../Hero/Hero"
import Projects from "../Projects/Projects"

const HomePage = () => {
  return (
    <>
        <Hero />
        <CloudTop />
        <CloudBottom />
        <Projects />
        <About />
        <Form />
    </>
  )
}

export default HomePage