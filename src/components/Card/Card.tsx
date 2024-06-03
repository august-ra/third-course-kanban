import { FC as ReactFC } from "react"
import * as Styled from "./Card.styled"
import Graphics from "../Graphics/Graphics"
import { TopicsColors } from "../../data/topics"


interface CardProps {
  topic: string
  title: string
  date:  string
}

function Card({ topic, title, date }: CardProps): ReactFC {
  const color: string = TopicsColors[topic]

  return (
    <Styled.CardItem>
      <Styled.Card>
        <Styled.CardGroup>
          <Styled.CardTheme $color={color}>
            <Styled.CardThemeText>{topic}</Styled.CardThemeText>
          </Styled.CardTheme>

          <a href="#popBrowse" target="_self">
            <Styled.CardButton>
              <Styled.CardButtonDot />
              <Styled.CardButtonDot />
              <Styled.CardButtonDot />
            </Styled.CardButton>
          </a>
        </Styled.CardGroup>

        <Styled.CardContent>
          <a href="" target="_blank">
            <Styled.CardTitle>{title}</Styled.CardTitle>
          </a>

          <Styled.CardDate>
            <Graphics.Calendar />

            <Styled.CardDateValue>{date}</Styled.CardDateValue>
          </Styled.CardDate>
        </Styled.CardContent>
      </Styled.Card>
    </Styled.CardItem>
  )
}

export default Card
