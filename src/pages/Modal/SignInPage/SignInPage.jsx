import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import { UserContext } from "../../../context/UserContext/UserContext"
import * as Styled from "../Modal.styled"
import * as Shared from "../../../components/SharedStyles"
import ErrorBlock from "../../../components/Shared/ErrorBlock/ErrorBlock"
import API from "../../../lib/api"


function SignInPage() {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)
  const [errorData, setErrorData] = useState(null)
  const [formData, setFormData] = useState({
    login:    "",
    password: "",
    activity: true,
  })

  function handleChangeText(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]:   value,
      activity: true,
    })
  }

  function submit() {
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
              <Styled.ModalInput $isError={Boolean(errorData)} type="text" name="login" id="formlogin" placeholder="Эл. почта" value={formData.login} onChange={handleChangeText} />
              <Styled.ModalInput $isError={Boolean(errorData)} type="password" name="password" id="formpassword" placeholder="Пароль" value={formData.password} onChange={handleChangeText} />
              {
                errorData
                  && <ErrorBlock code={errorData.code} message={errorData.message} />
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
