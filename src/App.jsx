import React from "react"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse.jsx"
import PopExit from "./components/Popups/PopExit/PopExit.jsx"
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard.jsx"


function App() {
  return (
    <div className="wrapper">
      {/*<!--pop - up start-->*/}

      <PopExit />
      <PopNewCard />
      <PopBrowse />

      {/*<!-- pop-up end-->*/}

      <Header />
      <Main />
    </div>
  )
}

export default App
