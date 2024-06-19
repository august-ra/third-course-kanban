import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import { UserContext } from "../../../context/UserContext/UserContext"
import * as Styled from "./PopExit.styled"
import StyledButton from "../../../components/Shared/Button/StyledButton"
import { prevent } from "../../../lib/hooks"


function PopExit() {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  function signOut() {
    userContext.clear()

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
              <StyledButton $primary={true} $doWidth={true} onClick={signOut}>
                Да, выйти
              </StyledButton>
              <StyledButton $primary={false} $doWidth={true} onClick={closeThis}>
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
