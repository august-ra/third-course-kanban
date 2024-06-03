import { FC as ReactFC } from "react"
import * as Styled from "./PopUser.styled"


interface PopUserProps {
  theme:         string
  onToggleTheme: () => void
}

function PopUser({ theme, onToggleTheme }: PopUserProps): ReactFC {
  return (
    <Styled.PopUser id="user-set-target">
      {/* <!-- <a href="">x</a> --> */}
      <Styled.PopUserName>Ivan Ivanov</Styled.PopUserName>
      <Styled.PopUserMail>ivan.ivanov@gmail.com</Styled.PopUserMail>

      <Styled.PopUserTheme>
        <Styled.PopUserThemeName>{theme === "light" ? "Светлая" : "Тёмная"} тема</Styled.PopUserThemeName>
        <Styled.PopUserThemeCheckbox type="checkbox" className="checkbox" name="checkbox" onChange={onToggleTheme} />
      </Styled.PopUserTheme>

      <Styled.PopUserButtonExit $isAccent={false} type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </Styled.PopUserButtonExit>
    </Styled.PopUser>
  )
}

export default PopUser
