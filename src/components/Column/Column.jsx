import React from "react"
import * as Styled from "./Column.styled"
import Card from "../Card/Card"


function Column({ title, tasks }) {
  return (
    <Styled.Column>
      <Styled.ColumnTitle>
        <Styled.ColumnTitleText>{title}</Styled.ColumnTitleText>
      </Styled.ColumnTitle>

      <Styled.ColumnCards>
        {
          tasks.map((item) => {
            return (
              <Card key={item.id} topic={item.topic} title={item.title} date={item.date} />
            )
          })
        }
      </Styled.ColumnCards>
    </Styled.Column>
  )
}

export default Column
