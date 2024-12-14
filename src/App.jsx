import React from "react"
import MouseTrail from "./components/MouseTrail"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Movies from "./components/Movies"
import Footer from "./components/Footer"
import "./index.css"


function App() {
  
  return (
    <div className="app">
      <MouseTrail/>
      <Header/>
      <Navbar/>
      <Movies/>
      <Footer/>
    </div>
  )
}

export default App
