import { useState } from "react"


function getEmptyFlashData() {
  return {
    timeout: 0,
    message: "",
    action:  null,
  }
}

export function useFlashData() {
  const [flashData, setFlashData] = useState(getEmptyFlashData())

  function clearFlashData() {
    setFlashData(getEmptyFlashData())
  }

  return { flashData, setFlashData, clearFlashData }
}
