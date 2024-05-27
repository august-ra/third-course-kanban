import { FC as ReactFC } from "react"
import * as Styled from "./Main.styled"
import Column from "../Column/Column"
import { Statuses } from "../../data/statuses"
import { TaskData } from "../../data/tasks"


interface MainProps {
  tasks: TaskData[]
}

function Main({ tasks }: MainProps): ReactFC {
  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.MainBlock>
          <Styled.MainContent>
            {
              Statuses.map((item: string, index: number) => {
                const filteredTasks: TaskData[] = tasks.filter((task: TaskData): boolean => task.status === item)

                return (
                  <Column key={index} title={item} tasks={filteredTasks} />
                )
              })
            }
          </Styled.MainContent>
        </Styled.MainBlock>
      </Styled.Container>
    </Styled.Main>
  )
}

export default Main
