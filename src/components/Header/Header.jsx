import { useState } from "react"
import * as Styled from "./Header.styled"
import PopUser from "../Popups/PopUser/PopUser"


function Header({ onAddTask }) {
  const [isPopUserOpened, setPopUserIsOpened] = useState(false)

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

    setPopUserIsOpened((prev) => !prev)
  }

  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.HeaderBlock>
          <Styled.HeaderLogoWrapper>
            <a href="" target="_self">
              <Styled.HeaderLogo src="/images/logo.png" alt="logo" />
            </a>
          </Styled.HeaderLogoWrapper>
          {/*<div className="header__logo _show _light">*/}
          {/*  <a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>*/}
          {/*</div>*/}
          {/*<div className="header__logo _dark">*/}
          {/*  <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>*/}
          {/*</div>*/}

          <Styled.HeaderNav>
            <Styled.HeaderNavButton id="btnMainNew" onClick={handleAddTask}>
              <a href="#popNewCard">Создать новую задачу</a>
            </Styled.HeaderNavButton>

            <Styled.HeaderNavUser href="#user-set-target" className="_hover02" onClick={handleOpenPopUser}>
              Ivan Ivanov
            </Styled.HeaderNavUser>

            { isPopUserOpened && <PopUser /> }
          </Styled.HeaderNav>
        </Styled.HeaderBlock>
      </Styled.Container>
    </Styled.Header>
  )
}

export default Header
