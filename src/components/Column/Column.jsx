import React from "react"
import Card from "../Card/Card.jsx"


const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        <Card tag="Web Design" title="Название задачи" date="30.10.23" />
        <Card tag="Research" title="Название задачи" date="30.10.23" />
        <Card tag="Copywriting" title="Название задачи" date="30.10.23" />
      </div>
    </div>
  )
}

export default Column
