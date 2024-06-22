import React from "react"
import { useNavigate } from "react-router-dom"
import Pages from "../../data/pages"
import { useThemeContext } from "../../context/hooks"
import * as Styled from "./Header.styled"
import * as Shared from "../SharedStyles"
import StyledButton from "../Shared/Button/StyledButton"
import UserLink from "./UserLink/UserLink"


function Header() {
  const navigate = useNavigate()
  const themeContext = useThemeContext()

  function handleAddTask() {
    navigate(`${Pages.CARDS}/${Pages.CREATE}`)
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

            <UserLink />
          </Styled.HeaderNav>
        </Styled.HeaderBlock>
      </Shared.Container>
    </Styled.Header>
  )
}

export default Header
