import { Dispatch, FC as ReactFC, SetStateAction, useEffect, useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Loader from "./components/Loader/Loader"
import Main from "./components/Main/Main"
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse"
import PopExit from "./components/Popups/PopExit/PopExit"
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard"
import { TaskData, Tasks } from "./data/tasks"


function App(): ReactFC {
  const [isLoading, setIsLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(true)
  const [tasks, setTasks]: [TaskData[], Dispatch<SetStateAction<TaskData[]>>] = useState<TaskData[]>(Tasks)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  function onAddTask(newTask: TaskData) {
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
