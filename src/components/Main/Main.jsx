import { useContext } from "react"
import { TasksContext } from "../../context/TasksContext/TasksContext"
import * as Styled from "./Main.styled"
import * as Shared from "../SharedStyles"
import ErrorBlock from "../Shared/ErrorBlock/ErrorBlock"
import Column from "../Column/Column"
import { Statuses } from "../../data/statuses"


function Main({ errorData }) {
  const tasksContext = useContext(TasksContext)

  return (
    <Styled.Main>
      <Shared.Container>
        <Styled.MainBlock>
          <Styled.MainContent>
            {
              errorData
                ? <ErrorBlock code={errorData.code} message={errorData.message} />
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
