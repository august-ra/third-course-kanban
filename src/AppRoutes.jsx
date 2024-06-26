import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Pages from "./data/pages"
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes"
import MainPage from "./pages/MainPage/MainPage"
import Page404 from "./pages/Page404/Page404"
import PopBrowse from "./pages/PopupsCards/PopBrowse/PopBrowse"
import PopExit from "./pages/Popups/PopExit/PopExit"
import PopNewCard from "./pages/PopupsCards/PopNewCard/PopNewCard"
import SignInPage from "./pages/Modal/SignInPage/SignInPage"
import SignUpPage from "./pages/Modal/SignUpPage/SignUpPage"


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={Pages.MAIN} element={<MainPage />}>
            <Route path={Pages.CARDS} element={<Outlet />}>
              <Route path={Pages.CARD} element={<PopBrowse />}>
                <Route path={Pages.EDIT} element={<Outlet />} />
              </Route>
              <Route path={Pages.CREATE} element={<PopNewCard />} />
            </Route>
            <Route path={Pages.SIGN_OUT} element={<PopExit />} />
          </Route>
        </Route>

        <Route path={Pages.SIGN_IN} element={<SignInPage />} />
        <Route path={Pages.SIGN_UP} element={<SignUpPage />} />
        <Route path={Pages.NOT_FOUND} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
