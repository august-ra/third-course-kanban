import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import { useUserContext } from "../../../context/hooks"
import * as Styled from "../Modal.styled"
import * as Shared from "../../../components/SharedStyles"
import ErrorBlock from "../../../components/Shared/ErrorBlock/ErrorBlock"
import API from "../../../lib/api"


function SignUpPage() {
  const navigate = useNavigate()
  const userContext = useUserContext()
  const [errorData, setErrorData] = useState(null)
  const [formData, setFormData] = useState({
    name:          "",
    login:         "",
    password:      "",
    nameEmpty:     false,
    loginEmpty:    false,
    passwordEmpty: false,
    activity:      true,
  })

  function handleChangeText(event) {
    const { name, value } = event.target

    const data = {
      ...formData,
      [name]:   value,
      activity: true,
    }

    if (errorData) {
      data.nameEmpty     = !data.name.trim()
      data.loginEmpty    = !data.login.trim()
      data.passwordEmpty = !data.password.trim()

      if (!data.nameEmpty && !data.loginEmpty && !data.passwordEmpty)
        setErrorData(null)
    }

    setFormData(data)
  }

  function submit() {
    formData.nameEmpty     = !formData.name.trim()
    formData.loginEmpty    = !formData.login.trim()
    formData.passwordEmpty = !formData.password.trim()

    const count = 0 + formData.nameEmpty + formData.loginEmpty + formData.passwordEmpty

    if (count > 1)
      return setErrorData({ code: null, message: "Введите корректные имя пользователя, логин и пароль" })
    else if (formData.nameEmpty)
      return setErrorData({ code: null, message: "Введите корректное имя пользователя" })
    else if (formData.loginEmpty)
      return setErrorData({ code: null, message: "Введите корректный логин" })
    else if (formData.passwordEmpty)
      return setErrorData({ code: null, message: "Введите корректный пароль" })
    else
      setErrorData(null)

    API.signUp(formData.name, formData.login, formData.password)
      .then((data) => {
        if (data && data.error) {
          setFormData({
            ...formData,
            activity: false,
          })
          return setErrorData(data)
        }

        setErrorData(null)
        userContext.save(data.user)
        navigate(Pages.MAIN)
      })
  }

  return (
    <Shared.Wrapper>
      <Shared.Container>
        <Styled.Modal>
          <Styled.ModalBlock>
            <Styled.ModalTitle>Регистрация</Styled.ModalTitle>

            <Styled.ModalForm id="formLogIn" action="#">
              <Styled.ModalInput $isError={errorData && formData.nameEmpty} type="text" name="name" id="first-name" placeholder="Имя" value={formData.name} onChange={handleChangeText} />
              <Styled.ModalInput $isError={errorData && formData.loginEmpty} type="text" name="login" id="formlogin" placeholder="Эл. почта" value={formData.login} onChange={handleChangeText} />
              <Styled.ModalInput $isError={errorData && formData.passwordEmpty} type="password" name="password" id="formpassword" placeholder="Пароль" value={formData.password} onChange={handleChangeText} />
              {
                errorData
                  && <ErrorBlock code={errorData.code} message={errorData.message} />
              }
              <Styled.ModalSubmit $primary={true} $width={0} disabled={!formData.activity} onClick={submit}>Зарегистрироваться</Styled.ModalSubmit>

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
