import React from "react"
import * as Styled from "./PopUser.styled"


function PopUser() {
  return (
    <Styled.PopUserHeader id="user-set-target">
      {/*<!-- <a href="">x</a> -->*/}
      <Styled.PopUserName>Ivan Ivanov</Styled.PopUserName>
      <Styled.PopUserMail>ivan.ivanov@gmail.com</Styled.PopUserMail>

      <Styled.PopUserTheme>
        <Styled.PopUserThemeName>Темная тема</Styled.PopUserThemeName>
        <Styled.PopUserThemeCheckbox type="checkbox" className="checkbox" name="checkbox" />
      </Styled.PopUserTheme>

      <Styled.PopUserButtonExit type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </Styled.PopUserButtonExit>
    </Styled.PopUserHeader>
  )
}

export default PopUser
