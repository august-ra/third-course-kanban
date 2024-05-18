import React from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse"
import PopExit from "./components/Popups/PopExit/PopExit"
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard"


function App() {
  return (
    <div className="wrapper">
      {/* <!--pop - up start--> */}

      <PopExit />
      <PopNewCard />
      <PopBrowse />

      {/* <!-- pop-up end--> */}

      <Header />
      <Main />
    </div>
  )
}

export default App
