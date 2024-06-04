import styled from "styled-components"
import * as Shared from "../SharedStyles"


export const Header = styled.header`
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

export const HeaderNavUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.extra};

  ${Shared.Hover02};

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
