import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import Pages from "../../data/pages"


function PrivateRoutes({ isAuthenticated }) {
  return (
    isAuthenticated
      ? <Outlet />
      : <Navigate to={Pages.SIGN_IN} />
  )
}

export default PrivateRoutes
