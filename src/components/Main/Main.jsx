import React from "react"
import Column from "../Column/Column"
import { Statuses } from "../../data/statuses.js"


const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {Statuses.map((item, index) => {
              return <Column key={index} title={item} />
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
