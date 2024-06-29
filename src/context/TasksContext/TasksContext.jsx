import { createContext, useState } from "react"


export const TasksContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([])

  function updateTasksFromServer(tasks) {
    setTasks(tasks.map((task) => ({
      id:          task._id,
      topic:       task.topic,
      title:       task.title,
      description: task.description,
      date:        new Date(task.date).getBeggingOfDay(),
      status:      task.status,
    })))
  }

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function getTaskById(id) {
    return tasks.filter((task) => task.id === id)[0]
  }

  function filterTasks(key, value) {
    return tasks.filter((task) => task[key] === value)
  }

  return <TasksContext.Provider value={{ tasks, setTasks, updateTasksFromServer, getTaskById, filterTasks }}>{children}</TasksContext.Provider>
}
