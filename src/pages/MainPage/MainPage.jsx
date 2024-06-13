import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import * as Shared from "../../components/SharedStyles"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"
import Main from "../../components/Main/Main"
import API from "../../lib/api"


function MainPage({ tasks, setTasks, authentication }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    API.readTasksFromServer()
      .then((data) => {
        if (data?.hasOwnProperty("error"))
          return setError(data)

        setError("")
        setTasks(data.tasks.map((task) => {
          return {
            id:          task._id,
            topic:       task.topic,
            title:       task.title,
            description: task.description,
            date:        task.date,
            status:      task.status,
          }
        }))
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Shared.Wrapper>
      <Outlet />
      <Header authentication={authentication} />
      {
        isLoading && !error
          ? <Loader />
          : <Main tasks={tasks} error={error} />
      }
    </Shared.Wrapper>
  )
}

export default MainPage
