import { Dispatch, JSX, SetStateAction, useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse"
import PopExit from "./components/Popups/PopExit/PopExit"
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard"
import { TaskData, Tasks } from "./data/tasks.js"


function App(): JSX.Element {
  const [tasks, setTasks]: [TaskData[], Dispatch<SetStateAction<TaskData[]>>] = useState<TaskData[]>(Tasks)

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
      <Main tasks={tasks} />
    </div>
  )
}

export default App
