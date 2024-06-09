import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Pages } from "../../../lib/pages"
import * as Styled from "../Modal.styled"
import * as Shared from "../../../components/SharedStyles"


function SignUpPage({ setIsAuthenticated }) {
  const navigate = useNavigate()

  function submit() {
    setIsAuthenticated(true)

    navigate(Pages.MAIN)
  }

  return (
    <Shared.Wrapper>
      <Shared.Container>
        <Styled.Modal>
          <Styled.ModalBlock>
            <Styled.ModalTitle>Регистрация</Styled.ModalTitle>

            <Styled.ModalForm id="formLogIn" action="#">
              <Styled.ModalInput type="text" name="first-name" id="first-name" placeholder="Имя" />
              <Styled.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
              <Styled.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
              <Styled.ModalSubmit $hasAccent={true} $width={0} type="button" onClick={submit}>Зарегистрироваться</Styled.ModalSubmit>

              <Styled.ModalGroup>
                <p>Уже есть аккаунт? <Link to={Pages.SIGN_IN}>Войдите здесь</Link></p>
              </Styled.ModalGroup>
            </Styled.ModalForm>
          </Styled.ModalBlock>
        </Styled.Modal>
      </Shared.Container>
    </Shared.Wrapper>
  )
}

export default SignUpPage
