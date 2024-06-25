import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Pages from "../../../data/pages"
import { useTasksContext, useUserContext } from "../../../context/hooks"
import * as Styled from "../PopCard.styled"
import StyledButton from "../../../components/Shared/Button/StyledButton"
import ErrorBlock from "../../../components/Shared/ErrorBlock/ErrorBlock"
import Calendar from "../../../components/Calendar/Calendar"
import TopicsRadioGroup from "../../../components/Shared/TopicsRadioGroup/TopicsRadioGroup"
import { TopicsColors } from "../../../data/topics"
import { prevent } from "../../../lib/hooks"
import API from "../../../lib/api"


function PopBrowse() {
  const location = useLocation()
  const navigate = useNavigate()
  const userContext = useUserContext()
  const tasksContext = useTasksContext()
  const { id } = useParams()

  const [errorData, setErrorData] = useState(null)
  const [formData, setFormData] = useState({
    topic:       " ",
    title:       "",
    description: "",
    date:        new Date(),
    status:      "Без статуса",
    color:       "",
    isEditing:   location.pathname.endsWith(`/${Pages.EDIT}`),
    isModified:  false,
  })

  function updateFormData(name, value) {
    setFormData({
      ...formData,
      [name]:     value,
      isModified: true,
    })
  }

  useEffect(() => {
    if (tasksContext.tasks.length === 0)
      return

    const task = tasksContext.getTaskById(id)

    if (!task)
      return navigate(Pages.MAIN)

    setFormData({
      ...formData,
      topic:       task.topic,
      title:       task.title,
      description: task.description,
      date:        task.date,
      status:      task.status,
      color:       TopicsColors[task.topic],
    })
  }, [tasksContext.tasks])

  function setActiveDate(value) {
    if (!formData.isEditing)
      return

    updateFormData("date", value)
  }

  function handleChangeText(event) {
    const { name, value } = event.target

    updateFormData(name, value)
  }

  function handleChangeTopic(topic) {
    if (!topic || formData.topic === topic)
      return

    updateFormData("topic", topic)
  }

  function handleBeginEditing() {
    if (formData.isEditing)
      return

    formData.isEditing = true

    navigate(`${location.pathname}/${Pages.EDIT}`)
  }

  function handleApplyEditing() {
    if (!formData.isEditing)
      return

    formData.isEditing = false

    // TODO: fetch changes to server

    navigate(location.pathname.replace(`/${Pages.EDIT}`, ""))
  }

  function handleCancelEditing() {
    if (!formData.isEditing)
      return

    formData.isEditing = false

    navigate(location.pathname.replace(`/${Pages.EDIT}`, ""))
  }

  function handleDelete() {
    API.deleteTaskOnServer(id, userContext.token)
      .then((data) => {
        if (data && data.error)
          return setErrorData(data)

        setErrorData(null)
        tasksContext.updateTasksFromServer(data.tasks)

        closeThis()
      })
  }

  function closeThis() {
    navigate(Pages.MAIN)
  }

  return (
    <Styled.PopCard id="popBrowse">
      <Styled.PopCardContainer onClick={closeThis}>
        <Styled.PopCardBlock onClick={prevent}>
          <Styled.PopCardContent>
            <Styled.PopCardTopBlock>
              <Styled.PopCardTitle $clearMargin={true}>{formData.title}</Styled.PopCardTitle>
              {
                !formData.isEditing && (
                  <Styled.PopCardCategoriesTheme as={"div"} $color={formData.color} $active={true}>
                    <Styled.PopCardCategoriesThemeText>{formData.topic}</Styled.PopCardCategoriesThemeText>
                  </Styled.PopCardCategoriesTheme>
                )
              }
            </Styled.PopCardTopBlock>

            <Styled.PopCardStatus>
              <Styled.PopCardStatusTitle>Статус</Styled.PopCardStatusTitle>

              <Styled.PopCardStatusThemes>
                <Styled.PopCardStatusTheme>
                  <Styled.PopCardStatusThemeText>{formData.status}</Styled.PopCardStatusThemeText>
                </Styled.PopCardStatusTheme>
              </Styled.PopCardStatusThemes>
            </Styled.PopCardStatus>

            <Styled.PopCardWrap>
              <Styled.PopCardForm id="formBrowseCard" action="#">
                <Styled.PopCardFormBlock>
                  <Styled.PopCardFormLabel htmlFor="textArea01">Описание задачи</Styled.PopCardFormLabel>
                  <Styled.PopCardFormTaskDescription $height={240} name="text" id="textArea01" readOnly placeholder="Введите описание задачи..." value={formData.description} onChange={handleChangeText} />
                </Styled.PopCardFormBlock>
              </Styled.PopCardForm>

              <Calendar activeDate={formData.date.getBeggingOfDay()} setActiveDate={setActiveDate} />
            </Styled.PopCardWrap>

            {
              formData.isEditing
                && (
                  <Styled.PopCardCategories>
                    <Styled.PopCardCategoriesSubtitle>Категория</Styled.PopCardCategoriesSubtitle>
                    <TopicsRadioGroup topic={formData.topic} handleChangeTopic={handleChangeTopic} />
                  </Styled.PopCardCategories>
                )
            }

            {
              errorData
                && <ErrorBlock code={errorData.code} message={errorData.message} />
            }

            <Styled.PopCardButtonsGroup>
              <Styled.PopCardButtonsGroupInner>
                {
                  formData.isEditing
                    ? <>
                      <StyledButton $primary={true} onClick={handleApplyEditing}>Сохранить</StyledButton>
                      <StyledButton $primary={false} onClick={handleCancelEditing}>Отменить</StyledButton>
                    </>
                    : <StyledButton $primary={false} $width={198} onClick={handleBeginEditing}>Редактировать задачу</StyledButton>
                }
                <StyledButton $primary={false} onClick={handleDelete}>Удалить задачу</StyledButton>
              </Styled.PopCardButtonsGroupInner>
              <StyledButton $primary={!formData.isEditing} onClick={closeThis}>Закрыть</StyledButton>
            </Styled.PopCardButtonsGroup>
          </Styled.PopCardContent>
        </Styled.PopCardBlock>
      </Styled.PopCardContainer>
    </Styled.PopCard>
  )
}

export default PopBrowse
