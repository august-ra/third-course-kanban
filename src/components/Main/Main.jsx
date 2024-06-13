import { useContext } from "react"
import { TasksContext } from "../../context/TasksContext/TasksContext"
import * as Styled from "./Main.styled"
import * as Shared from "../SharedStyles"
import Column from "../Column/Column"
import { Statuses } from "../../data/statuses"


function Main({ error }) {
  const tasksContext = useContext(TasksContext)

  return (
    <Styled.Main>
      <Shared.Container>
        <Styled.MainBlock>
          <Styled.MainContent>
            {
              error
                ? <Styled.MainError><h4>код ошибки {error.code}:</h4> {error.message}</Styled.MainError>
                : Statuses.map((item, index) => {
                  const filteredTasks = tasksContext.filterTasks("status", item)

                  return (
                    <Column key={index} title={item} tasksInColumn={filteredTasks} />
                  )
                })
            }
          </Styled.MainContent>
        </Styled.MainBlock>
      </Shared.Container>
    </Styled.Main>
  )
}

export default Main
