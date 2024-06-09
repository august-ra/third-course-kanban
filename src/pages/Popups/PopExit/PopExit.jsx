import React from "react"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../lib/pages"
import * as Styled from "./PopExit.styled"
import { StyledButton } from "../../../components/Shared/Button/StyledButton"
import { prevent } from "../../../lib/hooks"


function PopExit({ setIsAuthenticated }) {
  const navigate = useNavigate()

  function signOut() {
    setIsAuthenticated(false)

    navigate(Pages.SIGN_IN)
  }

  function closeThis() {
    navigate(Pages.MAIN)
  }

  return (
    <Styled.PopExit id="popExit">
      <Styled.PopExitContainer onClick={closeThis}>
        <Styled.PopExitBlock onClick={prevent}>
          <Styled.PopExitTitle>Выйти из аккаунта?</Styled.PopExitTitle>

          <Styled.PopExitForm action="#">
            <Styled.PopExitFormGroup>
              <StyledButton $hasAccent={true} $doWidth={true} type="button" onClick={signOut}>
                Да, выйти
              </StyledButton>
              <StyledButton $hasAccent={false} $doWidth={true} type="button" onClick={closeThis}>
                Нет, остаться
              </StyledButton>
            </Styled.PopExitFormGroup>
          </Styled.PopExitForm>
        </Styled.PopExitBlock>
      </Styled.PopExitContainer>
    </Styled.PopExit>
  )
}

export default PopExit
