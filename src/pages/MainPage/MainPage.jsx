import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import * as Shared from "../../components/SharedStyles"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"
import Main from "../../components/Main/Main"


function MainPage({ tasks, theme, onToggleTheme }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const id = setTimeout(() => setIsLoading(false), 2000)

    return () => clearTimeout(id)
  }, [])

  return (
    <Shared.Wrapper>
      <Outlet />
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      {
        isLoading
          ? <Loader />
          : <Main tasks={tasks} />
      }
    </Shared.Wrapper>
  )
}

export default MainPage
