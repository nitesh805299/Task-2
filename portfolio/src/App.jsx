import React from 'react'

import Navbar from './component/Navbar/Navbar' 
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Services from './component/Services/services'
import Project from './component/Project/Project'
import Contect from './component/Contect/Contect'

const App = () => {
  return (
    < div className="app">
      <Navbar/>
    <div className="main-container">
      <section id="Hero"><Hero/></section>
      <section id="About"> <About/></section>
      <section id="Services"> <Services/> </section>
      <section id="Project"><Project/></section>
      <section id="Contect"><Contect/></section>
    </div>
    </div>
  )
}

export default App
