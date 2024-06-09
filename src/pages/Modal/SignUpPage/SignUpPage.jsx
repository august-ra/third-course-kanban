import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import * as Styled from "../Modal.styled"
import * as Shared from "../../../components/SharedStyles"


function SignUpPage({ setAuthentication }) {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name:     "",
    login:    "",
    password: "",
  })

  function handleChangeText(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function submit() {
    setAuthentication(true)

    navigate(Pages.MAIN)
  }

  return (
    <Shared.Wrapper>
      <Shared.Container>
        <Styled.Modal>
          <Styled.ModalBlock>
            <Styled.ModalTitle>Регистрация</Styled.ModalTitle>

            <Styled.ModalForm id="formLogIn" action="#">
              <Styled.ModalInput $isError={Boolean(error)} type="text" name="name" id="first-name" placeholder="Имя" value={formData.name} onChange={handleChangeText} />
              <Styled.ModalInput $isError={Boolean(error)} type="text" name="login" id="formlogin" placeholder="Эл. почта" value={formData.login} onChange={handleChangeText} />
              <Styled.ModalInput $isError={Boolean(error)} type="password" name="password" id="formpassword" placeholder="Пароль" value={formData.password} onChange={handleChangeText} />
              <Styled.ModalErrorMessage>{error}</Styled.ModalErrorMessage>
              <Styled.ModalSubmit $hasAccent={true} $width={0} type="button" disabled={Boolean(error)} onClick={submit}>Зарегистрироваться</Styled.ModalSubmit>

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
