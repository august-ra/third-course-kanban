import styled, { css } from "styled-components"
import * as Shared from "../SharedStyles"


export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.$back};
`

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 10px;
  top: 0;
  left: 0;
  padding: 0 10px;
`

export const HeaderLogoWrapper = styled.div``

export const HeaderLogo = styled.img`
  width: 85px;

  @media only screen and (max-width: 375px) {
    width: 55px;
  }
`

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  gap: 10px;

  ${Shared.FlexCenter};
`

export const HeaderNavUser = styled.a`
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.$extra};
  user-select: none;

  ${Shared.FlexCenter};

  &:hover {
    color: #33399b;
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${(props) => props.theme.$extra};
    border-bottom: 1.9px solid ${(props) => props.theme.$extra};
    margin: -6px 0 0 5px;
    padding: 0;

    ${(props) => props.$opened ? ClosedUser : OpenedUser};
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`

const ClosedUser = css`
  transform: rotate(-45deg);
`

const OpenedUser = css`
  transform: rotate(135deg);
  translate: 0 4px;
`
