import React from "react"
import { useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import * as Styled from "./PopUser.styled"
import StyledButton from "../../../components/Shared/Button/StyledButton"


function PopUser({ authentication, theme, onToggleTheme }) {
  const navigate = useNavigate()

  function openPopupExit() {
    navigate(Pages.SIGN_OUT)
  }

  return (
    <Styled.PopUser id="user-set-target">
      {/* <!-- <a href="">x</a> --> */}
      <Styled.PopUserName>{authentication.name}</Styled.PopUserName>
      <Styled.PopUserMail>{authentication.login}</Styled.PopUserMail>

      <Styled.PopUserTheme>
        <Styled.PopUserThemeName>{theme === "light" ? "Светлая" : "Тёмная"} тема</Styled.PopUserThemeName>
        <Styled.PopUserThemeCheckbox type="checkbox" className="checkbox" name="checkbox" onChange={onToggleTheme} />
      </Styled.PopUserTheme>

      <StyledButton $hasAccent={false} $width={72} type="submit" onClick={openPopupExit}>Выйти</StyledButton>
    </Styled.PopUser>
  )
}

export default PopUser
