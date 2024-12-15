import React from "react"
import MouseTrail from "./components/MouseTrail"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Movies from "./components/MoviesList"
import TopTenList from "./components/TopTenList"
import Footer from "./components/Footer"
import GuestBook from "./components/GuestBook"
import "./index.css"

function App() {
  
  return (
    <div className="app">
      <MouseTrail/>
      <Header/>
      <Navbar/>
      <Movies/>
      <TopTenList/>
      <GuestBook/>
      <Footer/>
    </div>
  )
}

export default App
