import { useTasksContext } from "../../context/hooks"
import * as Styled from "./Main.styled"
import * as Shared from "../SharedStyles"
import Column from "../Column/Column"
import { Statuses } from "../../data/statuses"


function Main({ errorData, renderErrorBlock }) {
  const tasksContext = useTasksContext()

  return (
    <Styled.Main>
      <Shared.Container>
        <Styled.MainBlock>
          <Styled.MainContent>
            {
              errorData
                ? renderErrorBlock()
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
