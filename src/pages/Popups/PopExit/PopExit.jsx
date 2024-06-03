import React from "react"
import * as Styled from "./PopExit.styled"
import { StyledButton } from "../../../components/Shared/Button/StyledButton"


function PopExit() {
  return (
    <Styled.PopExit id="popExit">
      <Styled.PopExitContainer>
        <Styled.PopExitBlock>
          <Styled.PopExitTitle>Выйти из аккаунта?</Styled.PopExitTitle>

          <Styled.PopExitForm id="formExit" action="#">
            <Styled.PopExitFormGroup>
              <StyledButton $isAccent={true} id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>
              </StyledButton>
              <StyledButton $isAccent={false} id="exitNo">
                <a href="main.html">Нет, остаться</a>
              </StyledButton>
            </Styled.PopExitFormGroup>
          </Styled.PopExitForm>
        </Styled.PopExitBlock>
      </Styled.PopExitContainer>
    </Styled.PopExit>
  )
}

export default PopExit
