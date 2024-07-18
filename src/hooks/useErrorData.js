import { useState } from "react"
import ErrorBlock from "../components/Shared/ErrorBlock/ErrorBlock"


export function useErrorData() {
  const [errorData, setErrorData] = useState(null)

  function renderErrorBlock() {
    if (errorData)
      return ErrorBlock(errorData)
  }

  return { errorData, setErrorData, renderErrorBlock }
}
