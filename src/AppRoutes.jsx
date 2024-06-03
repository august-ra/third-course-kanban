import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import MainPage from "./components/pages/MainPage/MainPage"
import { Pages } from "./lib/pages"


function AppRoutes({ theme, onToggleTheme }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <Routes>
      <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
        <Route path={Pages.MAIN} element={<MainPage theme={theme} onToggleTheme={onToggleTheme} />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
