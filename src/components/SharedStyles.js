import styled, { css } from "styled-components"


export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`

export const Hover02 = css`
  &:hover {
    //background-color: #33399b;
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`

export const Hover03 = css`
  &:hover {
    color: #FFFFFF;
    background-color: #33399b;
    border-color: #33399b;
  }
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


export const PopTarget = css`
  &:target {
    display: block;
  }
`

export const CommonSubtitle = css`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
