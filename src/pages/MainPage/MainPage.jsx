import { useEffect, useState } from "react"
import * as Styled from "../../components/Global.styled"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"
import Main from "../../components/Main/Main"
import PopBrowse from "../Popups/PopBrowse/PopBrowse"
import PopExit from "../Popups/PopExit/PopExit"
import PopNewCard from "../Popups/PopNewCard/PopNewCard"
import { Tasks } from "../../data/tasks"


function MainPage({ theme, onToggleTheme }) {
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
    <Styled.Wrapper>
      {/* <!--pop - up start--> */}

      <PopExit />
      <PopNewCard />
      <PopBrowse />

      {/* <!-- pop-up end--> */}

      <Header theme={theme} onToggleTheme={onToggleTheme} onAddTask={onAddTask} />
      {
        isLoading
          ? <Loader />
          : <Main tasks={tasks} />
      }
    </Styled.Wrapper>
  )
}

export default MainPage
