import { useCallback, useEffect, useState } from "react"
import * as Styled from "./FlashBox.styled"
import { calcUnits } from "../../../lib/helpers"


function FlashBox({ timeout, state, caption, doAction }) {
  const [timer, setTimer] = useState(timeout + 3)

  const updateCallback = useCallback(() => {
    if (timer > 1) {
      setTimer(timer - 1)

      return
    }

    doAction()
  })

  useEffect(() => {
    setTimer(timeout + 3)
  }, [doAction])

  useEffect(() => {
    setTimeout(updateCallback, 1000)
  }, [timer])

  return (
    <Styled.FlashBoxContainer>
      <Styled.FlashBoxContent $bad={state === "bad"}>
        {caption}
        {
          timer - timeout <= 0
            && <><br />Окно будет автоматически закрыто через {timer} {calcUnits(timer, "секунд", "секунду", "секунды")}</>
        }
      </Styled.FlashBoxContent>
    </Styled.FlashBoxContainer>
  )
}

export default FlashBox
