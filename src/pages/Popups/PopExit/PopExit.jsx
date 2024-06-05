import React from "react"
import { Link } from "react-router-dom"
import { Pages } from "../../../lib/pages"
import * as Styled from "./PopExit.styled"
import { StyledButton } from "../../../components/Shared/Button/StyledButton"


function PopExit({ setIsAuthenticated }) {
  return (
    <Styled.PopExit id="popExit">
      <Styled.PopExitContainer>
        <Styled.PopExitBlock>
          <Styled.PopExitTitle>Выйти из аккаунта?</Styled.PopExitTitle>

          <Styled.PopExitForm id="formExit" action="#">
            <Styled.PopExitFormGroup>
              <StyledButton $isAccent={true} $doWidth={true} id="exitYes" onClick={setIsAuthenticated(false)}>
                <Link to={Pages.SIGNIN}>Да, выйти</Link>
              </StyledButton>
              <StyledButton $isAccent={false} $doWidth={true} id="exitNo">
                <Link to={Pages.MAIN}>Нет, остаться</Link>
              </StyledButton>
            </Styled.PopExitFormGroup>
          </Styled.PopExitForm>
        </Styled.PopExitBlock>
      </Styled.PopExitContainer>
    </Styled.PopExit>
  )
}

export default PopExit
