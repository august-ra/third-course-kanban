import styled from "styled-components"


const ErrorMessage = styled.div`
  color: #F84D4D;
  text-align: center;
`

function ErrorBlock({ code, message }) {
  return (
    <ErrorMessage>
      {code && <h4>код ошибки {code}:</h4>}
      {message}
    </ErrorMessage>
  )
}

export default ErrorBlock
