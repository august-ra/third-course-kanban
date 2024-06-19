import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Pages from "../../../data/pages"
import { TasksContext } from "../../../context/TasksContext/TasksContext"
import Calendar from "../../../components/Calendar/Calendar"
import * as Styled from "../PopCard.styled"
import StyledButton from "../../../components/Shared/Button/StyledButton"
import TopicsRadioGroup from "../../../components/Shared/TopicsRadioGroup/TopicsRadioGroup"
import { TopicsColors } from "../../../data/topics"
import { prevent } from "../../../lib/hooks"


function PopBrowse() {
  const navigate = useNavigate()
  const tasksContext = useContext(TasksContext)
  const { id } = useParams()
  const task = tasksContext.getTaskById(id)
  const color = TopicsColors[task.topic]

  const [formData, setFormData] = useState({
    topic:       task.topic,
    title:       task.title,
    description: task.description,
    date:        task.date,
    status:      task.status,
    isEditing:   true,
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
                  <Styled.PopCardCategoriesTheme as={"div"} $color={color} $active={true}>
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
              formData.isEditing && (
                <Styled.PopCardCategories>
                  <Styled.PopCardCategoriesSubtitle>Категория</Styled.PopCardCategoriesSubtitle>
                  <TopicsRadioGroup topic={formData.topic} handleChangeTopic={handleChangeTopic} />
                </Styled.PopCardCategories>
              )
            }

            {
              formData.isEditing
                ? <Styled.PopCardButtonsGroup>
                  <Styled.PopCardButtonsGroupInner>
                    <StyledButton $primary={true}><a href="#">Сохранить</a></StyledButton>
                    <StyledButton $primary={false}><a href="#">Отменить</a></StyledButton>
                    <StyledButton $primary={false} id="btnDelete">Удалить задачу</StyledButton>
                  </Styled.PopCardButtonsGroupInner>
                  <StyledButton $primary={true} onClick={closeThis}>Закрыть</StyledButton>
                </Styled.PopCardButtonsGroup>
                : <Styled.PopCardButtonsGroup>
                  <Styled.PopCardButtonsGroupInner>
                    <StyledButton $primary={false} $width={198}>Редактировать задачу</StyledButton>
                    <StyledButton $primary={false}>Удалить задачу</StyledButton>
                  </Styled.PopCardButtonsGroupInner>
                  <StyledButton $primary={true} onClick={closeThis}>Закрыть</StyledButton>
                </Styled.PopCardButtonsGroup>
            }
          </Styled.PopCardContent>
        </Styled.PopCardBlock>
      </Styled.PopCardContainer>
    </Styled.PopCard>
  )
}

export default PopBrowse
