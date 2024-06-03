import styled from "styled-components"
import * as Styled from "../Shared/SharedStyles"
import { ThemeData } from "../Themes"


export const Container = Styled.Container

export const Header = styled.header<{ theme: ThemeData }>`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.back};
`

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`

export const HeaderLogoWrapper = styled.div``

export const HeaderLogo = styled.img`
  width: 85px;
`

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderNavButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  & a {
    color: #FFFFFF;
  }

  ${Styled.Hover01};

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    margin-right: 0;
  }
`

export const HeaderNavUser = styled.a<{ theme: ThemeData }>`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.extra};

  ${Styled.Hover02};

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${(props) => props.theme.extra};
    border-bottom: 1.9px solid ${(props) => props.theme.extra};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`
