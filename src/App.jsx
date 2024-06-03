import { useState } from "react"
import AppRoutes from "./AppRoutes"
import "./App.css"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./components/Global.styled"
import { darkTheme, lightTheme } from "./components/Themes"



function App() {
  const [theme, setTheme] = useState("light")

  function onToggleTheme() {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppRoutes theme={theme} onToggleTheme={onToggleTheme} />
    </ThemeProvider>
  )
}

export default App
