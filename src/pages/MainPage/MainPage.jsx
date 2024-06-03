import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import * as Styled from "../../components/Global.styled"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"
import Main from "../../components/Main/Main"
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
      <Outlet />
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
