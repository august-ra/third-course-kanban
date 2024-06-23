import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import { useTasksContext, useUserContext } from "../../../context/hooks"
import * as Styled from "../PopCard.styled"
import TopicsRadioGroup from "../../../components/Shared/TopicsRadioGroup/TopicsRadioGroup"
import Calendar from "../../../components/Calendar/Calendar"
import ErrorBlock from "../../../components/Shared/ErrorBlock/ErrorBlock"
import { prevent } from "../../../lib/hooks"
import API from "../../../lib/api"


function PopNewCard() {
  const navigate = useNavigate()
  const userContext = useUserContext()
  const tasksContext = useTasksContext()
  const [errorData, setErrorData] = useState(null)
  const [formData, setFormData] = useState({
    topic:       "",
    title:       "",
    description: "",
    date:        null,
    isModified:  false,
  })

  function updateFormData(name, value) {
    setFormData({
      ...formData,
      [name]:     value,
      isModified: true,
    })
  }

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

    const newTask = {
      ...formData,
      status: "Без статуса",
    }

    API.createTaskOnServer(newTask, userContext.token)
      .then((data) => {
        if (data && data.error)
          return setErrorData(data)

        setErrorData(null)
        tasksContext.setTasks(data.tasks.map((task) => ({
          id:          task._id,
          topic:       task.topic,
          title:       task.title,
          description: task.description,
          date:        new Date(task.date),
          status:      task.status,
        })))

        closeThis()
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

            {
              errorData
                && <ErrorBlock code={errorData.code} message={errorData.message}/>
            }

            <Styled.PopCardButtonCreate $primary={true} $width={132} onClick={handleAddTask}>Создать задачу</Styled.PopCardButtonCreate>
          </Styled.PopCardContent>
        </Styled.PopCardBlock>
      </Styled.PopCardContainer>
    </Styled.PopCard>
  )
}

export default PopNewCard
