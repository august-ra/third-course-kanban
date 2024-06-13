import { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../../components/Themes"


export const ThemeContext = createContext(null)

export function UsedThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  function printName() {
    return `${theme === "light" ? "Светлая" : "Тёмная"} тема`
  }

  function getLogoPath() {
    return `/images/logo${theme === "light" ? "" : "_dark"}.png`
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ toggleTheme, printName, getLogoPath }}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  )
}
