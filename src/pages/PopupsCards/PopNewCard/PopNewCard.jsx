import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import { TasksContext } from "../../../context/TasksContext/TasksContext"
import * as Styled from "../PopCard.styled"
import TopicsRadioGroup from "../../../components/Shared/TopicsRadioGroup/TopicsRadioGroup"
import Calendar from "../../../components/Calendar/Calendar"
import { prevent } from "../../../lib/hooks"


function PopNewCard() {
  const navigate = useNavigate()
  const tasksContext = useContext(TasksContext)
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

    const date = new Date()
    const newTask = {
      id:          date.getTime(),
      topic:       formData.topic,
      title:       formData.title,
      description: formData.description,
      date:        formData.date,
      status:      "Без статуса",
    }

    tasksContext.addTask(newTask)
    closeThis()
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

            <Styled.PopCardButtonCreate $primary={true} $width={132} onClick={handleAddTask}>Создать задачу</Styled.PopCardButtonCreate>
          </Styled.PopCardContent>
        </Styled.PopCardBlock>
      </Styled.PopCardContainer>
    </Styled.PopCard>
  )
}

export default PopNewCard
