import { useState } from "react"
import * as Styled from "./Header.styled"
import * as Shared from "../SharedStyles"
import { StyledButton } from "../Shared/Button/StyledButton"
import PopUser from "../../pages/Popups/PopUser/PopUser"


function Header({ theme, onToggleTheme, onAddTask }) {
  const [isPopUserOpened, setIsPopUserOpened] = useState(false)

  function handleAddTask(event) {
    event.preventDefault()

    const date = new Date()
    const newTask = {
      id:     date.getTime(),
      topic:  "Web Design",
      title:  "Test",
      date:   date.printShort(),
      status: "Без статуса",
    }

    onAddTask(newTask)
  }

  function handleOpenPopUser(event) {
    event.preventDefault()

    setIsPopUserOpened((prev) => !prev)
  }

  return (
    <Styled.Header>
      <Shared.Container>
        <Styled.HeaderBlock>
          <Styled.HeaderLogoWrapper>
            <a href="" target="_self">
              <Styled.HeaderLogo src={`/images/logo${theme === "light" ? "" : "_dark"}.png`} alt="logo" />
            </a>
          </Styled.HeaderLogoWrapper>

          <Styled.HeaderNav>
            <StyledButton $isAccent={true} id="btnMainNew" onClick={handleAddTask}>
              <a href="#popNewCard">Создать новую задачу</a>
            </StyledButton>

            <Styled.HeaderNavUser href="#user-set-target" onClick={handleOpenPopUser}>
              Ivan Ivanov
            </Styled.HeaderNavUser>

            { isPopUserOpened && <PopUser theme={theme} onToggleTheme={onToggleTheme} /> }
          </Styled.HeaderNav>
        </Styled.HeaderBlock>
      </Shared.Container>
    </Styled.Header>
  )
}

export default Header
