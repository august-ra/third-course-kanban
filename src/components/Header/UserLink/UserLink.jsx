import { useState } from "react"
import { useUserContext } from "../../../context/hooks"
import * as Styled from "../Header.styled"
import PopUser from "../../../pages/Popups/PopUser/PopUser"
import { prevent } from "../../../lib/hooks"


function UserLink() {
  const userContext = useUserContext()
  const [isPopUserOpened, setIsPopUserOpened] = useState(false)

  function handleOpenPopUser(event) {
    prevent(event)

    setIsPopUserOpened((prev) => !prev)
  }

  return (
    <>
      <Styled.HeaderNavUser $opened={isPopUserOpened} onClick={handleOpenPopUser}>
        {userContext.name}
      </Styled.HeaderNavUser>

      {
        isPopUserOpened
          && <PopUser />
      }
    </>
  )
}

export default UserLink
