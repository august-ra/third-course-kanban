import React from "react"
import * as Styled from "./Main.styled"
import Column from "../Column/Column"
import { Statuses } from "../../data/statuses"


function Main({ tasks }) {
  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.MainBlock>
          <Styled.MainContent>
            {
              Statuses.map((item, index) => {
                const filteredTasks = tasks.filter((task) => task.status === item)

                return <Column key={index} title={item} tasks={filteredTasks} />
              })
            }
          </Styled.MainContent>
        </Styled.MainBlock>
      </Styled.Container>
    </Styled.Main>
  )
}

export default Main
