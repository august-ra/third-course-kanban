import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import MainPage from "./pages/MainPage/MainPage"
import PopBrowse from "./pages/Popups/PopBrowse/PopBrowse.jsx"
import PopExit from "./pages/Popups/PopExit/PopExit.jsx"
import PopNewCard from "./pages/Popups/PopNewCard/PopNewCard.jsx"
import { Pages } from "./lib/pages"


function AppRoutes({ theme, onToggleTheme }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <Routes>
      <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
        <Route path={Pages.MAIN} element={<MainPage theme={theme} onToggleTheme={onToggleTheme} />}>
          <Route path={Pages.CARD} element={<PopBrowse />} />
          <Route path={Pages.CREATE} element={<PopNewCard />} />
          <Route path={Pages.EXIT} element={<PopExit />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
