import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { useTasksContext, useUserContext } from "../../context/hooks"
import * as Shared from "../../components/SharedStyles"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"
import Main from "../../components/Main/Main"
import API from "../../lib/api"


function MainPage() {
  const userContext = useUserContext()
  const tasksContext = useTasksContext()
  const [isLoading, setIsLoading] = useState(true)
  const [errorData, setErrorData] = useState(null)

  useEffect(() => {
    API.readTasksFromServer(userContext.token)
      .then((data) => {
        if (data && data.error)
          return setErrorData(data)

        setErrorData(null)
        tasksContext.updateTasksFromServer(data.tasks)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Shared.Wrapper>
      <Outlet />
      <Header />
      {
        isLoading && !errorData
          ? <Loader />
          : <Main errorData={errorData} />
      }
    </Shared.Wrapper>
  )
}

export default MainPage
