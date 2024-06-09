import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import * as Styled from "../Modal.styled"
import * as Shared from "../../../components/SharedStyles"


function SignInPage({ setAuthentication }) {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    login:    "",
    password: "",
  })

  function handleChangeText(event) {
    const { name, value } = event.target

    console.log(`${name}: ${value}`)

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
            <Styled.ModalTitle>Вход</Styled.ModalTitle>

            <Styled.ModalForm id="formLogIn" action="#">
              <Styled.ModalInput $isError={Boolean(error)} type="text" name="login" id="formlogin" placeholder="Эл. почта" value={formData.login} onChange={handleChangeText} />
              <Styled.ModalInput $isError={Boolean(error)} type="password" name="password" id="formpassword" placeholder="Пароль" value={formData.password} onChange={handleChangeText} />
              <Styled.ModalErrorMessage>{error}</Styled.ModalErrorMessage>
              <Styled.ModalSubmit $hasAccent={true} $width={0} type="button" disabled={Boolean(error)} onClick={submit}>Войти</Styled.ModalSubmit>

              <Styled.ModalGroup>
                <p>Нужно зарегистрироваться? <Link to={Pages.SIGN_UP}>Регистрируйтесь здесь</Link></p>
              </Styled.ModalGroup>
            </Styled.ModalForm>
          </Styled.ModalBlock>
        </Styled.Modal>
      </Shared.Container>
    </Shared.Wrapper>
  )
}

export default SignInPage
