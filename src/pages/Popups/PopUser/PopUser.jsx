import { useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import { useThemeContext, useUserContext } from "../../../context/hooks"
import * as Styled from "./PopUser.styled"
import StyledButton from "../../../components/Shared/Button/StyledButton"


function PopUser() {
  const navigate = useNavigate()
  const themeContext = useThemeContext()
  const userContext = useUserContext()

  function openPopupExit() {
    navigate(Pages.SIGN_OUT)
  }

  return (
    <Styled.PopUser id="user-set-target">
      {/* <!-- <a href="">x</a> --> */}
      <Styled.PopUserName>{userContext.name}</Styled.PopUserName>
      <Styled.PopUserMail>{userContext.login}</Styled.PopUserMail>

      <Styled.PopUserTheme>
        <Styled.PopUserThemeName>{themeContext.printName()}</Styled.PopUserThemeName>
        <Styled.PopUserThemeCheckbox type="checkbox" className="checkbox" name="checkbox" onChange={themeContext.toggleTheme} />
      </Styled.PopUserTheme>

      <StyledButton $primary={false} $width={72} onClick={openPopupExit}>Выйти</StyledButton>
    </Styled.PopUser>
  )
}

export default PopUser
