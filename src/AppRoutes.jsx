import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Pages } from "./lib/pages"
import PrivateRoutes from "./PrivateRoutes"
import MainPage from "./pages/MainPage/MainPage"
import Page404 from "./pages/Page404/Page404"
import PopBrowse from "./pages/Popups/PopBrowse/PopBrowse"
import PopExit from "./pages/Popups/PopExit/PopExit"
import PopNewCard from "./pages/Popups/PopNewCard/PopNewCard"
import SignInPage from "./pages/Modal/SignInPage/SignInPage"
import SignUpPage from "./pages/Modal/SignUpPage/SignUpPage"


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

      <Route path={Pages.SIGN_IN} element={<SignInPage setIsAuthenticated={setIsAuthenticated} />} />
      <Route path={Pages.SIGN_UP} element={<SignUpPage setIsAuthenticated={setIsAuthenticated} />} />
      <Route path={Pages.NOT_FOUND} element={<Page404 />} />
    </Routes>
  )
}

export default AppRoutes
