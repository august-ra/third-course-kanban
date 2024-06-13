import styled, { css } from "styled-components"
import * as Shared from "../../SharedStyles"


const StyledButton = styled.button`
  ${(props) => props.$width
    ? css`width: ${props.$width}px;`
    : props.$width === 0
      ? css`width: 100%;`
      : props.$doWidth && css`width: 153px;`
  };

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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) => {
    return props.$hasAccent
      ? MasterButton
      : SlaveButton
  }}
`

const MasterButton = css`
  color: #FFFFFF;
  background-color: #565EEF;
  border: none;

  ${Shared.Hover01};

  &:disabled {
    color: #94A6BE;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

const SlaveButton = css`
  color: ${(props) => props.theme.extra};
  background-color: transparent;
  border: 0.7px solid ${(props) => props.theme.extra};

  ${Shared.Hover03};

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`

export default StyledButton
