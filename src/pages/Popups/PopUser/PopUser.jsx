import React from "react"
import { Link } from "react-router-dom"
import { Pages } from "../../../lib/pages"
import * as Styled from "./PopUser.styled"
import { StyledButton } from "../../../components/Shared/Button/StyledButton"


function PopUser({ theme, onToggleTheme }) {
  return (
    <Styled.PopUser id="user-set-target">
      {/* <!-- <a href="">x</a> --> */}
      <Styled.PopUserName>Ivan Ivanov</Styled.PopUserName>
      <Styled.PopUserMail>ivan.ivanov@gmail.com</Styled.PopUserMail>

      <Styled.PopUserTheme>
        <Styled.PopUserThemeName>{theme === "light" ? "Светлая" : "Тёмная"} тема</Styled.PopUserThemeName>
        <Styled.PopUserThemeCheckbox type="checkbox" className="checkbox" name="checkbox" onChange={onToggleTheme} />
      </Styled.PopUserTheme>

      <StyledButton $isAccent={false} $width={72}><Link to={Pages.EXIT}>Выйти</Link></StyledButton>
    </Styled.PopUser>
  )
}

export default PopUser
