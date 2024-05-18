import { useState } from "react"
import PopUser from "../Popups/PopUser/PopUser"


const Header = ({ onAddTask }) => {
  const [isOpened, setIsOpened] = useState(false)

  function handleAddTask(event) {
    event.preventDefault()

    const date = new Date()
    const newTask = {
      id:     date.getTime(),
      theme:  "Web Design",
      title:  "Test",
      date:   date.printShort(),
      status: "Без статуса",
    }

    onAddTask(newTask)
  }

  function handleOpen(event) {
    event.preventDefault()

    setIsOpened((prev) => !prev)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
          </div>

          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={handleAddTask}>
              <a href="#popNewCard">Создать новую задачу</a>
            </button>

            <a href="#user-set-target" className="header__user _hover02" onClick={handleOpen}>Ivan Ivanov</a>

            { isOpened && <PopUser /> }
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
