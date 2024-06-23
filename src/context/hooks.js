import { useContext } from "react"
import { ThemeContext } from "./ThemeContext/ThemeContext"
import { UserContext } from "./UserContext/UserContext"
import { TasksContext } from "./TasksContext/TasksContext"


export function useThemeContext() {
  return useContext(ThemeContext)
}

export function useUserContext() {
  return useContext(UserContext)
}

export function useTasksContext() {
  return useContext(TasksContext)
}
