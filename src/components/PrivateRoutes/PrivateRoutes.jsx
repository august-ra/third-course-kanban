import { Navigate, Outlet } from "react-router-dom"
import Pages from "../../data/pages"
import { useUserContext } from "../../context/hooks"


function PrivateRoutes() {
  const userContext = useUserContext()

  return (
    userContext.isAuthenticated()
      ? <Outlet />
      : <Navigate to={Pages.SIGN_IN} />
  )
}

export default PrivateRoutes
