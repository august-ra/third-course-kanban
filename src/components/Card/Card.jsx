import { useNavigate } from "react-router-dom"
import Pages from "../../data/pages"
import { useTasksContext } from "../../context/hooks"
import * as Styled from "./Card.styled"
import * as Graphics from "../Graphics/Graphics"
import { TopicsColors } from "../../data/topics"


function Card({ task }) {
  const navigate = useNavigate()
  const tasksContext = useTasksContext()
  const color = TopicsColors[task.topic]
  const link = `${Pages.CARDS}/${task.id}`

  function handleTaskOpen(e) {
    e.preventDefault()
    navigate(link)
    tasksContext.setCurrentTaskById(task.id)
  }

  return (
    <Styled.CardItem>
      <Styled.Card>
        <Styled.CardGroup>
          <Styled.CardTheme $color={color}>
            <Styled.CardThemeText>{task.topic}</Styled.CardThemeText>
          </Styled.CardTheme>

          <a href="#" onClick={handleTaskOpen}>
            <Styled.CardButton>
              <Styled.CardButtonDot />
              <Styled.CardButtonDot />
              <Styled.CardButtonDot />
            </Styled.CardButton>
          </a>
        </Styled.CardGroup>

        <Styled.CardContent>
          <a href="#" onClick={handleTaskOpen}>
            <Styled.CardTitle>{task.title}</Styled.CardTitle>
          </a>

          <Styled.CardDate>
            <Graphics.Calendar />

            <Styled.CardDateValue>{task.date.printShort()}</Styled.CardDateValue>
          </Styled.CardDate>
        </Styled.CardContent>
      </Styled.Card>
    </Styled.CardItem>
  )
}

export default Card
