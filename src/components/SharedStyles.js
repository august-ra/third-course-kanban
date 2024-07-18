import styled, { css } from "styled-components"


/* shared styled components */

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.$body};
`

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`

/* shared styles */

export const Modal = (props) => css`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.$back};
  width: 100%;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.$popBlock};

  ${props.$hasShadow && css`box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);`};
`

export const FlexCenter = (props) => css`
  display: flex;
  ${props.$column && css`flex-direction: column;`};
  justify-content: center;
  align-items: center;
`

export const Subtitle = (props) => css`
  color: ${props.theme.$text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const Orange = css`
  background-color: #FFE4C2;
  color: #FF6D00;
`

export const OrangeNegative = css`
  background-color: #FF6D00;
  color: #FFE4C2;
`

export const Green = css`
  background-color: #B4FDD1;
  color: #06B16E;
`

export const GreenNegative = css`
  background-color: #06B16E;
  color: #B4FDD1;
`

export const Purple = css`
  background-color: #E9D4FF;
  color: #9A48F1;
`

export const PurpleNegative = css`
  background-color: #9A48F1;
  color: #E9D4FF;
`

export const Gray = css`
  background: #94A6BE;
  color: #FFFFFF;
`
