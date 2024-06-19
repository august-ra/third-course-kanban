import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Pages from "../../../data/pages"
import { TasksContext } from "../../../context/TasksContext/TasksContext"
import * as Styled from "./PopNewCard.styled"
import Calendar from "../../../components/Calendar/Calendar"
import { Topics, TopicsColors } from "../../../data/topics"
import { prevent } from "../../../lib/hooks"


function PopNewCard() {
  const navigate = useNavigate()
  const tasksContext = useContext(TasksContext)
  const [formData, setFormData] = useState({
    topic:       "",
    title:       "",
    description: "",
    date:        null,
    isModified:  "",
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
    <Styled.PopNewCard id="popNewCard">
      <Styled.PopNewCardContainer onClick={closeThis}>
        <Styled.PopNewCardBlock onClick={prevent}>
          <Styled.PopNewCardContent>
            <Styled.PopNewCardTitle>Создание задачи</Styled.PopNewCardTitle>
            <Styled.PopNewCardClose to={Pages.MAIN}>&#10006;</Styled.PopNewCardClose>

            <Styled.PopNewCardWrap>
              <Styled.PopNewCardForm id="formNewCard" action="#">
                <Styled.PopNewCardFormBlock>
                  <Styled.PopNewCardFormLabel htmlFor="formTitle">Название задачи</Styled.PopNewCardFormLabel>
                  <Styled.PopNewCardFormTaskName $name={true} type="text" name="title" id="formTitle" placeholder="Введите название задачи..." autoFocus={true} value={formData.title} onChange={handleChangeText} />
                </Styled.PopNewCardFormBlock>
                <Styled.PopNewCardFormBlock>
                  <Styled.PopNewCardFormLabel htmlFor="textArea">Описание задачи</Styled.PopNewCardFormLabel>
                  <Styled.PopNewCardFormTaskDescription $name={false} name="description" id="textArea" placeholder="Введите описание задачи..." value={formData.description} onChange={handleChangeText} />
                </Styled.PopNewCardFormBlock>
              </Styled.PopNewCardForm>

              <Calendar activeDate={formData.date} setActiveDate={setActiveDate} />
            </Styled.PopNewCardWrap>

            <Styled.PopNewCardCategories>
              <Styled.PopNewCardCategoriesSubtitle>Категория</Styled.PopNewCardCategoriesSubtitle>

              <Styled.PopNewCardCategoriesThemes>
                {
                  Topics.map((item, index) => {
                    const color = TopicsColors[item]
                    const isActive = formData.topic === item

                    const handleClick = () => handleChangeTopic(item)

                    return (
                      <Styled.PopNewCardCategoriesTheme key={index} $color={color} $active={isActive} onClick={handleClick}>
                        <Styled.PopNewCardCategoriesThemeText onClick={handleClick}>{item}</Styled.PopNewCardCategoriesThemeText>
                      </Styled.PopNewCardCategoriesTheme>
                    )
                  })
                }
              </Styled.PopNewCardCategoriesThemes>
            </Styled.PopNewCardCategories>

            <Styled.PopNewCardButtonCreate $hasAccent={true} $width={132} type="button" onClick={handleAddTask}>Создать задачу</Styled.PopNewCardButtonCreate>
          </Styled.PopNewCardContent>
        </Styled.PopNewCardBlock>
      </Styled.PopNewCardContainer>
    </Styled.PopNewCard>
  )
}

export default PopNewCard
