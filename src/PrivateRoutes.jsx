import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Pages } from "./lib/pages"


function PrivateRoutes({ isAuthenticated }) {
  return (
    isAuthenticated
      ? <Outlet />
      : <Navigate to={Pages.SIGNIN} />
  )
}

export default PrivateRoutes
