import { FC as ReactFC } from "react"
import * as Styled from "./Loader.styled"


function Loader(): ReactFC {
  return (
    <Styled.LoaderContainer>
      <Styled.LoaderLoading>
        <Styled.LoaderBar />
        <Styled.LoaderBar />
        <Styled.LoaderBar />
      </Styled.LoaderLoading>
    </Styled.LoaderContainer>
  )
}

export default Loader
