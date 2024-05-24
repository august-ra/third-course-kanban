import { FC as ReactFC } from "react"
import Card from "../Card/Card"
import { TaskData } from "../../data/tasks"


interface ColumnProps {
  title: string
  tasks: TaskData[]
}

function Column({ title, tasks }: ColumnProps): ReactFC {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {
          tasks.map((item: TaskData) => {
            return <Card key={item.id} topic={item.topic} title={item.title} date={item.date} />
          })
        }
      </div>
    </div>
  )
}

export default Column
