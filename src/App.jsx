import React from "react"
import AppRoutes from "./AppRoutes"
import "./App.css"
import { UsedThemeProvider } from "./context/ThemeContext/ThemeContext"
import GlobalStyle from "./components/Global.styled"


function App() {
  return (
    <UsedThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </UsedThemeProvider>
  )
}

export default App
