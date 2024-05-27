import { Dispatch, FC as ReactFC, SetStateAction, useEffect, useState } from "react"
import "./App.css"
import { ThemeProvider } from "styled-components"
import GlobalStyle, * as Styled from "./components/Global.styled"
import Header from "./components/Header/Header"
import Loader from "./components/Loader/Loader"
import Main from "./components/Main/Main"
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse"
import PopExit from "./components/Popups/PopExit/PopExit"
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard"
import { darkTheme, lightTheme } from "./components/Themes"
import { TaskData, Tasks } from "./data/tasks"


function App(): ReactFC {
  const [isLoading, setIsLoading]: [   boolean, Dispatch<SetStateAction<boolean>>]    =    useState<boolean>(true)
  const [theme,     setTheme]:     [    string, Dispatch<SetStateAction<string>>]     =     useState<string>("light")
  const [tasks,     setTasks]:     [TaskData[], Dispatch<SetStateAction<TaskData[]>>] = useState<TaskData[]>(Tasks)

  useEffect(() => {
    const id: number = setTimeout(() => setIsLoading(false), 2000)

    return () => clearTimeout(id)
  }, [])

  function onToggleTheme() {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  function onAddTask(newTask: TaskData) {
    setTasks([...tasks, newTask])
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Styled.Wrapper>
        <GlobalStyle />

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
    </ThemeProvider>
  )
}

export default App
