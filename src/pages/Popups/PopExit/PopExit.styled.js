import styled from "styled-components"
import * as Shared from "../../../components/SharedStyles"


export const PopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  @media screen and (max-width: 375px) {
    min-width: auto;
  }
`

export const PopExitContainer = styled.div.attrs({
  $column: true,
})`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.${(props) => props.theme.isLight() ? "4" : "8"});

  ${Shared.FlexCenter};
`

export const PopExitBlock = styled.div`
  max-width: 370px;
  padding: 50px 60px;

  ${Shared.Modal};

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`

export const PopExitTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`

export const PopExitForm = styled.form``

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`
