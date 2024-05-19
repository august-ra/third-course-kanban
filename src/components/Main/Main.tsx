import { JSX } from "react"
import Column from "../Column/Column"
import { Statuses } from "../../data/statuses"
import { TaskData } from "../../data/tasks"


interface MainProps {
  tasks: TaskData[]
}

function Main({ tasks }: MainProps): JSX.Element {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {
              Statuses.map((item: string, index: number) => {
                const filteredTasks: TaskData[] = tasks.filter((task: TaskData): boolean => task.status === item)

                return <Column key={index} title={item} tasks={filteredTasks} />
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
