import React from "react"
import * as Styled from "./Column.styled"
import Card from "../Card/Card"


function Column({ title, tasksInColumn }) {
  return (
    <Styled.Column>
      <Styled.ColumnTitle>
        <Styled.ColumnTitleText>{title}</Styled.ColumnTitleText>
      </Styled.ColumnTitle>

      <Styled.ColumnCards>
        {
          tasksInColumn.map((task) => {
            return (
              <Card key={task.id} task={task} />
            )
          })
        }
      </Styled.ColumnCards>
    </Styled.Column>
  )
}

export default Column
