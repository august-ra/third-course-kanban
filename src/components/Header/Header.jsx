import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Pages from "../../data/pages"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext"
import { UserContext } from "../../context/UserContext/UserContext"
import * as Styled from "./Header.styled"
import * as Shared from "../SharedStyles"
import StyledButton from "../Shared/Button/StyledButton"
import PopUser from "../../pages/Popups/PopUser/PopUser"
import { prevent } from "../../lib/hooks"


function Header() {
  const navigate = useNavigate()
  const themeContext = useContext(ThemeContext)
  const userContext = useContext(UserContext)
  const [isPopUserOpened, setIsPopUserOpened] = useState(false)

  function handleAddTask() {
    navigate(Pages.CREATE)
  }

  function handleOpenPopUser(event) {
    prevent(event)

    setIsPopUserOpened((prev) => !prev)
  }

  return (
    <Styled.Header>
      <Shared.Container>
        <Styled.HeaderBlock>
          <Styled.HeaderLogoWrapper>
            <a href="" target="_self">
              <Styled.HeaderLogo src={themeContext.getLogoPath()} alt="logo" />
            </a>
          </Styled.HeaderLogoWrapper>

          <Styled.HeaderNav>
            <StyledButton $primary={true} $width={178} onClick={handleAddTask}>
              Создать новую задачу
            </StyledButton>

            <Styled.HeaderNavUser onClick={handleOpenPopUser}>
              {userContext.name}
            </Styled.HeaderNavUser>

            { isPopUserOpened && <PopUser /> }
          </Styled.HeaderNav>
        </Styled.HeaderBlock>
      </Shared.Container>
    </Styled.Header>
  )
}

export default Header
