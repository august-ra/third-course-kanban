import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../lib/pages"
import * as Styled from "./Header.styled"
import * as Shared from "../SharedStyles"
import { StyledButton } from "../Shared/Button/StyledButton"
import PopUser from "../../pages/Popups/PopUser/PopUser"


function Header({ theme, onToggleTheme }) {
  const navigate = useNavigate()
  const [isPopUserOpened, setIsPopUserOpened] = useState(false)

  function handleAddTask() {
    navigate(Pages.CREATE)
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
            <StyledButton $hasAccent={true} $width={178} type="button" onClick={handleAddTask}>
              Создать новую задачу
            </StyledButton>

            <Styled.HeaderNavUser onClick={handleOpenPopUser}>
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
