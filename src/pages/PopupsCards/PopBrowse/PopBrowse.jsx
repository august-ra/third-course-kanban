import { useEffect, useRef } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Pages from "../../../data/pages"
import { useTasksContext, useUserContext } from "../../../context/hooks"
import { useFormData } from "../../../hooks/useFormData"
import { useErrorData } from "../../../hooks/useErrorData"
import { useFlashData } from "../../../hooks/useFlashData"
import * as Styled from "../PopCard.styled"
import StyledButton from "../../../components/Shared/Button/StyledButton"
import StatusRadioGroup from "../../../components/Shared/StatusRadioGroup/StatusRadioGroup"
import TopicsRadioGroup from "../../../components/Shared/TopicsRadioGroup/TopicsRadioGroup"
import Calendar from "../../../components/Calendar/Calendar"
import FlashBox from "../../../components/Shared/FlashBox/FlashBox"
import { TopicsColors } from "../../../data/topics"
import { prevent } from "../../../lib/hooks"
import API from "../../../lib/api"


function PopBrowse() {
  const location = useLocation()
  const navigate = useNavigate()
  const userContext = useUserContext()
  const tasksContext = useTasksContext()
  const { id } = useParams()
  const descriptionInput = useRef()

  const { flashData, setFlashData, clearFlashData } = useFlashData()
  const { setErrorData, renderErrorBlock } = useErrorData()
  const { formData, setFormData, updateFormData } = useFormData(initFormData())

  function initFormData() {
    return {
      topic:       " ",
      title:       "",
      description: "",
      date:        null,
      status:      "Без статуса",
      color:       "",
      isEditing:   location.pathname.endsWith(`/${Pages.EDIT}`),
      isModified:  false,
    }
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

  useEffect(() => {
    descriptionInput.current.readOnly = !formData.isEditing
  }, [formData.isEditing])

  function setActiveDate(value) {
    if (!formData.isEditing)
      return

    updateFormData("date", value)
  }

  function handleChangeText(event) {
    const { name, value } = event.target

    updateFormData(name, value)
  }

  function handleChangeStatus(status) {
    if (!status || formData.status === status)
      return

    updateFormData("status", status)
  }

  function handleChangeTopic(topic) {
    if (!topic || formData.topic === topic)
      return

    updateFormData("topic", topic)
  }

  function handleBeginEditing() {
    if (formData.isEditing)
      return

    updateFormData("isEditing", true)

    navigate(`${location.pathname}/${Pages.EDIT}`)
  }

  function handleApplyEditing() {
    if (!formData.isEditing)
      return

    API.updateTaskOnServer(id, formData, userContext.token)
      .then((data) => {
        clearFlashData()

        if (data && data.error) {
          setFormData({
            ...formData,
            activity: false,
          })
          return setErrorData(data)
        }

        updateFormData("isEditing", false)

        setErrorData(null)

        setFlashData({
          timeout: 0,
          message: "Задача успешно изменена",
          action:  () => {
            clearFlashData()
            tasksContext.updateTasksFromServer(data.tasks)
            navigate(location.pathname.replace(`/${Pages.EDIT}`, ""))
          },
        })
      })
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
        clearFlashData()

        if (data && data.error)
          return setErrorData(data)

        setErrorData(null)

        setFlashData({
          timeout: 5,
          message: "Задача успешно удалена",
          action:  () => {
            tasksContext.updateTasksFromServer(data.tasks)
            closeThis()
          },
        })
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
                !formData.isEditing
                  && (
                    <Styled.PopCardCategoriesTheme as={"div"} $color={formData.color} $active={true}>
                      <Styled.PopCardCategoriesThemeText>{formData.topic}</Styled.PopCardCategoriesThemeText>
                    </Styled.PopCardCategoriesTheme>
                  )
              }
            </Styled.PopCardTopBlock>

            <Styled.PopCardStatus>
              <Styled.PopCardStatusTitle>Статус</Styled.PopCardStatusTitle>
              <StatusRadioGroup showAllStatuses={formData.isEditing} status={formData.status} handleChangeStatus={handleChangeStatus} />
            </Styled.PopCardStatus>

            <Styled.PopCardWrap>
              <Styled.PopCardForm id="formBrowseCard" action="#">
                <Styled.PopCardFormBlock>
                  <Styled.PopCardFormLabel htmlFor="textArea">Описание задачи</Styled.PopCardFormLabel>
                  <Styled.PopCardFormTaskDescription $name={false} $height={240} name="description" id="textArea" ref={descriptionInput} placeholder="Введите описание задачи..." value={formData.description} onChange={handleChangeText} />
                </Styled.PopCardFormBlock>
              </Styled.PopCardForm>

              {
                formData.date
                  && <Calendar activeDate={formData.date} setActiveDate={setActiveDate} />
              }
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
              flashData.message
                ? <FlashBox timeout={flashData.timeout} caption={flashData.message} doAction={flashData.action} />
                : renderErrorBlock()
            }

            <Styled.PopCardButtonsGroup>
              <Styled.PopCardButtonsGroupInner>
                {
                  formData.isEditing
                    ? <>
                      <StyledButton $primary={true} disabled={!formData.activity} onClick={handleApplyEditing}>Сохранить</StyledButton>
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
