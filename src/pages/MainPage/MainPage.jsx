import { useContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { UserContext } from "../../context/UserContext/UserContext"
import { TasksContext } from "../../context/TasksContext/TasksContext"
import * as Shared from "../../components/SharedStyles"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"
import Main from "../../components/Main/Main"
import API from "../../lib/api"


function MainPage() {
  const userContext = useContext(UserContext)
  const tasksContext = useContext(TasksContext)
  const [isLoading, setIsLoading] = useState(true)
  const [errorData, setErrorData] = useState(null)

  useEffect(() => {
    API.readTasksFromServer(userContext.token)
      .then((data) => {
        if (data && data.error)
          return setErrorData(data)

        setErrorData(null)
        tasksContext.setTasks(data.tasks.map((task) => ({
          id:          task._id,
          topic:       task.topic,
          title:       task.title,
          description: task.description,
          date:        new Date(task.date),
          status:      task.status,
        })))
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
