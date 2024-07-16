import styled, { css } from "styled-components"
import * as Shared from "../../SharedStyles"


const StyledButton = styled.button.attrs({
  type: "button",
})`
  ${getWidth};

  height: 30px;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;

  & a {
    width: 100%;
    height: 100%;
    color: inherit;

    ${Shared.FlexCenter};
  }

  ${(props) => (
    props.$primary
      ? MasterButton(props)
      : SlaveButton(props)
  )};
`

const MasterButton = (props) => css`
  color: #FFFFFF;
  background-color: #565EEF;
  border: none;

  &:hover {
    background-color: #33399b;
  }

  &:disabled {
    color: #94A6BE;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
    padding-inline: 4px;
  }
`

const SlaveButton = (props) => css`
  color: ${props.theme.$extra};
  background-color: transparent;
  border: 0.7px solid ${props.theme.$extra};

  &:hover {
    color: #FFFFFF;
    background-color: #33399b;
    border-color: #33399b;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    padding-inline: 4px;
  }
`

/* style logics */

function getWidth(props) {
  if (props.$width)
    return css`width: ${props.$width}px;`
  else if (props.$width === 0)
    return css`width: 100%;`
  else if (props.$doWidth)
    return css`width: 153px;`
}

export default StyledButton
