import { useState } from "react"
import * as Styled from "./Header.styled"
import PopUser from "../Popups/PopUser/PopUser"


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
      <Styled.Container>
        <Styled.HeaderBlock>
          <Styled.HeaderLogoWrapper>
            <a href="" target="_self">
              <Styled.HeaderLogo src={`/images/logo${theme === "light" ? "" : "_dark"}.png`} alt="logo" />
            </a>
          </Styled.HeaderLogoWrapper>

          <Styled.HeaderNav>
            <Styled.HeaderNavButton id="btnMainNew" onClick={handleAddTask}>
              <a href="#popNewCard">Создать новую задачу</a>
            </Styled.HeaderNavButton>

            <Styled.HeaderNavUser href="#user-set-target" onClick={handleOpenPopUser}>
              Ivan Ivanov
            </Styled.HeaderNavUser>

            { isPopUserOpened && <PopUser theme={theme} onToggleTheme={onToggleTheme} /> }
          </Styled.HeaderNav>
        </Styled.HeaderBlock>
      </Styled.Container>
    </Styled.Header>
  )
}

export default Header
