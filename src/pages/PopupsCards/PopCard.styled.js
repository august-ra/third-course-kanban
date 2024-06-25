import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import * as Shared from "../../components/SharedStyles"
import StyledButton from "../../components/Shared/Button/StyledButton"


export const PopCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  ${Shared.PopTarget};

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`

export const PopCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.${(props) => props.theme.isLight() ? "4" : "8"});

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`

export const PopCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.back};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.popBlock};
  position: relative;

  ${(props) => props.theme.isDark() && css`box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);`};

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`

export const PopCardContent = styled.div`
  display: block;
  text-align: left;
`

export const PopCardTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`

export const PopCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  ${(props) => props.$clearMargin || css`margin-bottom: 20px;`};
`

export const PopCardClose = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.isLight() ? "#000000" : "#EF565E"};
  }
`

export const PopCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const PopCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`

export const PopCardFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const PopCardFormLabel = styled.label`
  ${Shared.Subtitle};
`

const PopCardFormInput = css`
  width: 100%;
  outline: none;
  padding: 14px;
  color: inherit;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder,
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`

export const PopCardFormTaskName = styled.input`
  margin: 20px 0;

  ${PopCardFormInput};
`

export const PopCardFormTaskDescription = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: ${(props) => props.$height || 200}px;

  ${PopCardFormInput};

  &[readonly] {
    background: ${(props) => props.theme.body};
  }
`

export const PopCardCategories = styled.div`
  margin-bottom: 20px;
`

export const PopCardCategoriesSubtitle = styled.p`
  margin-bottom: 14px;

  ${Shared.Subtitle};
`

export const PopCardCategoriesThemes = styled.fieldset`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  border: none;
`

export const PopCardCategoriesTheme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;
  opacity: ${(props) => props.$active ? "1 !important;" : "0.4;"};

  ${(props) => props.theme.getCSSForColor(props.$color)};

  @media screen and (max-width: 495px) {
    display: none;
  }
`

export const PopCardCategoriesThemeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`

export const PopCardButtonCreate = styled(StyledButton)`
  float: right;
`

/* status */

export const PopCardStatus = styled.div`
  margin-bottom: 11px;
`

export const PopCardStatusTitle = styled.p`
  margin-bottom: 14px;

  ${Shared.Subtitle};
`

export const PopCardStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const PopCardStatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  ${(props) => props.$active && Shared.Gray};
`

export const PopCardStatusThemeText = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`

/* action buttons */

export const PopCardButtonsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  @media screen and (max-width: 495px) {
    button {
      width: 100%;
      height: 40px;
    }
  }
`

export const PopCardButtonsGroupInner = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`
