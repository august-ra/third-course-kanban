import styled from "styled-components"
import { StyledButton } from "../../components/Shared/Button/StyledButton"


export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.back};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.popBlock};
  box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
`

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`

export const ModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModalInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
  }

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`

export const ModalSubmit = styled(StyledButton)`
  border-radius: 4px;
  margin-block: 20px;
  font-weight: 500;
`

export const ModalGroup = styled.div`
  text-align: center;

  & p,
  & a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  & a {
    text-decoration: underline;
  }
`
