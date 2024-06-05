import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Pages } from "./lib/pages"
import PrivateRoutes from "./PrivateRoutes"
import MainPage from "./pages/MainPage/MainPage"
import PopBrowse from "./pages/Popups/PopBrowse/PopBrowse"
import PopExit from "./pages/Popups/PopExit/PopExit"
import PopNewCard from "./pages/Popups/PopNewCard/PopNewCard"


function AppRoutes({ theme, onToggleTheme }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <Routes>
      <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
        <Route path={Pages.MAIN} element={<MainPage theme={theme} onToggleTheme={onToggleTheme} />}>
          <Route path={Pages.CARD} element={<PopBrowse />} />
          <Route path={Pages.CREATE} element={<PopNewCard />} />
          <Route path={Pages.SIGN_OUT} element={<PopExit setIsAuthenticated={setIsAuthenticated} />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
