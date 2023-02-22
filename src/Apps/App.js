import React from "react"

import Header from "../Components/Header";
import Welcome from "../Components/Welcome";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

import '../style/main.css';


const App = (props) => {
  
  return (
    <div className="main">
      <Header/>
      <Welcome/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;