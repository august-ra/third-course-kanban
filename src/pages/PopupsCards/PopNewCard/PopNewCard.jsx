import React from "react"
import { useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import { useTasksContext, useUserContext } from "../../../context/hooks"
import { useFormData } from "../../../hooks/useFormData"
import { useErrorData } from "../../../hooks/useErrorData"
import { useFlashData } from "../../../hooks/useFlashData"
import * as Styled from "../PopCard.styled"
import StyledButton from "../../../components/Shared/Button/StyledButton"
import TopicsRadioGroup from "../../../components/Shared/TopicsRadioGroup/TopicsRadioGroup"
import Calendar from "../../../components/Calendar/Calendar"
import FlashBox from "../../../components/Shared/FlashBox/FlashBox"
import { prevent } from "../../../lib/hooks"
import API from "../../../lib/api"


function PopNewCard() {
  const navigate = useNavigate()
  const userContext = useUserContext()
  const tasksContext = useTasksContext()

  const { flashData, setFlashData, clearFlashData } = useFlashData()
  const { setErrorData, renderErrorBlock } = useErrorData()
  const { formData, setFormData, updateFormData } = useFormData({
    topic:       "",
    title:       "",
    description: "",
    date:        null,
    status:      "Без статуса",
    isModified:  false,
  })

  function setActiveDate(value) {
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

  function handleAddTask(event) {
    event.preventDefault()

    API.createTaskOnServer(formData, userContext.token)
      .then((data) => {
        clearFlashData()

        if (data && data.error) {
          setFormData({
            ...formData,
            activity: false,
          })
          return setErrorData(data)
        }

        setErrorData(null)

        setFlashData({
          timeout: 5,
          message: "Задача успешно создана",
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
    <Styled.PopCard id="popNewCard">
      <Styled.PopCardContainer onClick={closeThis}>
        <Styled.PopCardBlock onClick={prevent}>
          <Styled.PopCardContent>
            <Styled.PopCardTitle>Создание задачи</Styled.PopCardTitle>
            <Styled.PopCardClose to={Pages.MAIN}>&#10006;</Styled.PopCardClose>

            <Styled.PopCardWrap>
              <Styled.PopCardForm id="formNewCard" action="#">
                <Styled.PopCardFormBlock>
                  <Styled.PopCardFormLabel htmlFor="formTitle">Название задачи</Styled.PopCardFormLabel>
                  <Styled.PopCardFormTaskName $name={true} type="text" name="title" id="formTitle" placeholder="Введите название задачи..." autoFocus={true} value={formData.title} onChange={handleChangeText} />
                </Styled.PopCardFormBlock>
                <Styled.PopCardFormBlock>
                  <Styled.PopCardFormLabel htmlFor="textArea">Описание задачи</Styled.PopCardFormLabel>
                  <Styled.PopCardFormTaskDescription $name={false} name="description" id="textArea" placeholder="Введите описание задачи..." value={formData.description} onChange={handleChangeText} />
                </Styled.PopCardFormBlock>
              </Styled.PopCardForm>

              <Calendar activeDate={formData.date} setActiveDate={setActiveDate} />
            </Styled.PopCardWrap>

            <Styled.PopCardCategories>
              <Styled.PopCardCategoriesSubtitle>Категория</Styled.PopCardCategoriesSubtitle>
              <TopicsRadioGroup topic={formData.topic} handleChangeTopic={handleChangeTopic} />
            </Styled.PopCardCategories>

            <Styled.PopCardBottomLine>
              <StyledButton $primary={true} $width={132} disabled={!formData.activity} onClick={handleAddTask}>Создать задачу</StyledButton>

              {
                renderErrorBlock()
              }
            </Styled.PopCardBottomLine>
          </Styled.PopCardContent>
        </Styled.PopCardBlock>
      </Styled.PopCardContainer>

      {
        flashData.message
          && <FlashBox timeout={flashData.timeout} caption={flashData.message} doAction={flashData.action} />
      }
    </Styled.PopCard>
  )
}

export default PopNewCard
