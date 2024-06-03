import { FC as ReactFC } from "react"
import * as Styled from "./Column.styled"
import Card from "../Card/Card"
import { TaskData } from "../../data/tasks"


interface ColumnProps {
  title: string
  tasks: TaskData[]
}

function Column({ title, tasks }: ColumnProps): ReactFC {
  return (
    <Styled.Column>
      <Styled.ColumnTitle>
        <Styled.ColumnTitleText>{title}</Styled.ColumnTitleText>
      </Styled.ColumnTitle>

      <Styled.ColumnCards>
        {
          tasks.map((item: TaskData) => {
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
