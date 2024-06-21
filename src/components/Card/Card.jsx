import { Link } from "react-router-dom"
import Pages from "../../data/pages"
import * as Styled from "./Card.styled"
import * as Graphics from "../Graphics/Graphics"
import { TopicsColors } from "../../data/topics"


function Card({ task }) {
  const color = TopicsColors[task.topic]
  const link = `${Pages.CARDS}/${task.id}`

  return (
    <Styled.CardItem>
      <Styled.Card>
        <Styled.CardGroup>
          <Styled.CardTheme $color={color}>
            <Styled.CardThemeText>{task.topic}</Styled.CardThemeText>
          </Styled.CardTheme>

          <Link to={link}>
            <Styled.CardButton>
              <Styled.CardButtonDot />
              <Styled.CardButtonDot />
              <Styled.CardButtonDot />
            </Styled.CardButton>
          </Link>
        </Styled.CardGroup>

        <Styled.CardContent>
          <Link to={link}>
            <Styled.CardTitle>{task.title}</Styled.CardTitle>
          </Link>

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
