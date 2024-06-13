import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import Pages from "../../data/pages"
import { UserContext } from "../../context/UserContext/UserContext"


function PrivateRoutes() {
  const userContext = useContext(UserContext)

  return (
    userContext.isAuthenticated()
      ? <Outlet />
      : <Navigate to={Pages.SIGN_IN} />
  )
}

export default PrivateRoutes
