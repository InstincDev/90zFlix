import React, {useState} from "react"
import MouseTrail from "./components/MouseTrail"
import LoadingPage from "./components/LoadingPage"
import EnterPage from "./components/EnterPage"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Movies from "./components/MoviesList"
import TopTenList from "./components/TopTenList"
import Footer from "./components/Footer"
import GuestBook from "./components/GuestBook"
import "./index.css"

function App() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  const handleEnter = () => {
    setEntered(true);
  };

  if (loading) {
    return (
    <>
    <MouseTrail/>
    <LoadingPage onFinish={handleLoadingFinish} />
    </>);
  }

  if (!entered) {
    return (
    <>
    <MouseTrail/>
    <EnterPage onEnter={handleEnter} />;
    </>)
  }
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
