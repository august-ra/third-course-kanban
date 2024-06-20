import React from "react"
import ReactDOM from "react-dom/client"
import { UserProvider } from "./context/UserContext/UserContext"
import { TasksProvider } from "./context/TasksContext/TasksContext"
import App from "./App"
import "./index.css"
import "./extensions/date"
import "./extensions/string"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </UserProvider>
  </React.StrictMode>,
)
