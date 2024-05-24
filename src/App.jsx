import { useEffect, useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Loader from "./components/Loader/Loader"
import Main from "./components/Main/Main"
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse"
import PopExit from "./components/Popups/PopExit/PopExit"
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard"
import { Tasks } from "./data/tasks"


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tasks, setTasks] = useState(Tasks)

  useEffect(() => {
    const id = setTimeout(() => setIsLoading(false), 2000)

    return () => clearTimeout(id)
  }, [])

  function onAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="wrapper">
      {/* <!--pop - up start--> */}

      <PopExit />
      <PopNewCard />
      <PopBrowse />

      {/* <!-- pop-up end--> */}

      <Header onAddTask={onAddTask} />
      {
        isLoading
          ? <Loader />
          : <Main tasks={tasks} />
      }
    </div>
  )
}

export default App
