import styled, { css } from "styled-components"
import * as Styled from "../../Shared/SharedStyles"
import { ThemeData } from "../../Themes"


export const PopUser = styled.div<{ theme: ThemeData }>`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0 10px 39px 0 rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;

  ${(props) => props.theme.isDark() && css`
    border: 0.7px solid #4E5566;
    background: #202229;
    box-shadow: 0 10px 39px 0 rgba(148, 166, 190, 0.40);
  `};

  ${Styled.PopTarget};
`

export const PopUserName = styled.p<{ theme: ThemeData }>`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`

export const PopUserMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const PopUserThemeName = styled.p<{ theme: ThemeData }>`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`

export const PopUserThemeCheckbox = styled.input<{ theme: ThemeData }>`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${(props) => props.theme.body};
  outline: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.isLight() ? "#94A6BE" : "#565EEF"};
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`

export const PopUserButtonExit = styled.button<{ theme: ThemeData }>`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${(props) => props.theme.extra};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.extra};

  & a {
    color: inherit;
  }
`
