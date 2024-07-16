import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import { useUserContext } from "../../../context/hooks"
import { useFormData } from "../../../hooks/useFormData"
import { useErrorData } from "../../../hooks/useErrorData"
import * as Styled from "../Modal.styled"
import * as Shared from "../../../components/SharedStyles"
import API from "../../../lib/api"


function SignInPage() {
  const navigate = useNavigate()
  const userContext = useUserContext()

  const { errorData, setErrorData, renderErrorBlock } = useErrorData()
  const { formData, setFormData, updateFormData } = useFormData({
    login:         "",
    password:      "",
    loginEmpty:    true,
    passwordEmpty: true,
    activity:      true,
  })

  function handleChangeText(event) {
    const { name, value } = event.target

    updateFormData(name, value)

    if (errorData) {
      if (!formData.loginEmpty && !formData.passwordEmpty)
        setErrorData(null)
    }
  }

  function submit() {
    if (formData.loginEmpty && formData.passwordEmpty)
      return setErrorData({ code: null, message: "Введите корректные логин и пароль" })
    else if (formData.loginEmpty)
      return setErrorData({ code: null, message: "Введите корректный логин" })
    else if (formData.passwordEmpty)
      return setErrorData({ code: null, message: "Введите корректный пароль" })
    else
      setErrorData(null)

    API.signIn(formData.login, formData.password)
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
            <Styled.ModalTitle>Вход</Styled.ModalTitle>

            <Styled.ModalForm id="formLogIn" action="#">
              <Styled.ModalInput $isError={errorData && formData.loginEmpty} type="text" name="login" id="formlogin" placeholder="Эл. почта" value={formData.login} onChange={handleChangeText} />
              <Styled.ModalInput $isError={errorData && formData.passwordEmpty} type="password" name="password" id="formpassword" placeholder="Пароль" value={formData.password} onChange={handleChangeText} />
              {
                renderErrorBlock()
              }
              <Styled.ModalSubmit $primary={true} $width={0} disabled={!formData.activity} onClick={submit}>Войти</Styled.ModalSubmit>

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
