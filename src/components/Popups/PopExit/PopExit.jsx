import React from "react"
import * as Styled from "./PopExit.styled"


function PopExit() {
  return (
    <Styled.PopExit id="popExit">
      <Styled.PopExitContainer>
        <Styled.PopExitBlock>
          <Styled.PopExitTitle>Выйти из аккаунта?</Styled.PopExitTitle>

          <Styled.PopExitForm id="formExit" action="#">
            <Styled.PopExitFormGroup>
              <Styled.PopExitFormButtonYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>
              </Styled.PopExitFormButtonYes>
              <Styled.PopExitFormButtonNo id="exitNo">
                <a href="main.html">Нет, остаться</a>
              </Styled.PopExitFormButtonNo>
            </Styled.PopExitFormGroup>
          </Styled.PopExitForm>
        </Styled.PopExitBlock>
      </Styled.PopExitContainer>
    </Styled.PopExit>
  )
}

export default PopExit
