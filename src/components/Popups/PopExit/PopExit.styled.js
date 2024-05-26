import styled from "styled-components"
import * as Styled from "../../SharedStyles"


export const PopExit = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  ${Styled.PopTarget};
`

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.${(props) => props.theme.isLight() ? "4" : "8"});
`

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.back};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.popBlock};
  box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);

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

  @media only screen and (max-width: 375px) {
    display: block;
  }
`

export const PopExitFormButton = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
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
`

export const PopExitFormButtonYes = styled(PopExitFormButton)`
  color: #FFFFFF;
  background-color: #565EEF;
  border: none;
  margin-right: 10px;

  ${Styled.Hover01};

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const PopExitFormButtonNo = styled(PopExitFormButton)`
  color: ${(props) => props.theme.extra};
  background-color: transparent;
  border: 0.7px solid ${(props) => props.theme.extra};

  ${Styled.Hover03};

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`
