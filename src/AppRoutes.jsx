import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Pages from "./data/pages"
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes"
import MainPage from "./pages/MainPage/MainPage"
import Page404 from "./pages/Page404/Page404"
import PopBrowse from "./pages/Popups/PopBrowse/PopBrowse"
import PopExit from "./pages/Popups/PopExit/PopExit"
import PopNewCard from "./pages/Popups/PopNewCard/PopNewCard"
import SignInPage from "./pages/Modal/SignInPage/SignInPage"
import SignUpPage from "./pages/Modal/SignUpPage/SignUpPage"
import Tasks from "./data/tasks"
import UserInfo from "./context/UserContext/UserContext"


function AppRoutes() {
  const [authentication, setAuthentication] = useState(UserInfo.read())
  const [tasks, setTasks] = useState(Tasks)

  function updateAuthentication(data) {
    UserInfo.save(data)

    setAuthentication(data)
  }

  function onAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <Routes>
      <Route element={<PrivateRoutes isAuthenticated={authentication} />}>
        <Route path={Pages.MAIN} element={<MainPage tasks={tasks} setTasks={setTasks} authentication={authentication} />}>
          <Route path={Pages.CARD} element={<PopBrowse tasks={tasks} />} />
          <Route path={Pages.CREATE} element={<PopNewCard onAddTask={onAddTask} />} />
          <Route path={Pages.SIGN_OUT} element={<PopExit setAuthentication={updateAuthentication} />} />
        </Route>
      </Route>

      <Route path={Pages.SIGN_IN} element={<SignInPage setAuthentication={updateAuthentication} />} />
      <Route path={Pages.SIGN_UP} element={<SignUpPage setAuthentication={updateAuthentication} />} />
      <Route path={Pages.NOT_FOUND} element={<Page404 />} />
    </Routes>
  )
}

export default AppRoutes
