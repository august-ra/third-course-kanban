import { createContext, useState } from "react"


export const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [data, setData] = useState(read())

  function isAuthenticated() {
    return data && data.login
  }

  function read() {
    let userInfo = localStorage.getItem("userInfo")

    if (userInfo)
      userInfo = JSON.parse(userInfo)

    if (!userInfo || typeof userInfo !== "object")
      userInfo = {}

    return userInfo
  }

  function save(userInfo) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo))

    setData(userInfo)
  }

  function clear() {
    localStorage.removeItem("userInfo")

    setData("")
  }

  return <UserContext.Provider value={{ ...data, isAuthenticated, read, save, clear }}>{children}</UserContext.Provider>
}
