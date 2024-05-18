import React from "react"
import Column from "../Column/Column"
import { Statuses } from "../../data/statuses.js"
import { Tasks } from "../../data/tasks.js"


const Main = ({ tasks }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {
              Statuses.map((item, index) => {
                const filteredTasks = tasks.filter((task) => task.status === item)

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
