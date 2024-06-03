import { Dispatch, FC as ReactFC, SetStateAction, useState } from "react"
import * as Styled from "./Header.styled"
import { StyledButton } from "../Shared/StyledButton/StyledButton"
import PopUser from "../Popups/PopUser/PopUser"
import { TaskData } from "../../data/tasks"


interface HeaderProps {
  theme:         string
  onToggleTheme: () => void
  onAddTask:     (task: TaskData) => void
}

function Header({ theme, onToggleTheme, onAddTask }: HeaderProps): ReactFC {
  const [isPopUserOpened, setIsPopUserOpened]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)

  function handleAddTask(event) {
    event.preventDefault()

    const date:    Date     = new Date()
    const newTask: TaskData = {
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

    setIsPopUserOpened((prev: boolean) => !prev)
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
            <StyledButton $isAccent={true} id="btnMainNew" onClick={handleAddTask}>
              <a href="#popNewCard">Создать новую задачу</a>
            </StyledButton>

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
