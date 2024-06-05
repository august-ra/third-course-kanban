import React from "react"
import { Link } from "react-router-dom"
import * as Styled from "./Card.styled"
import * as Graphics from "../Graphics/Graphics"
import { TopicsColors } from "../../data/topics"


function Card({ id, topic, title, date }) {
  const color = TopicsColors[topic]

  return (
    <Styled.CardItem>
      <Styled.Card>
        <Styled.CardGroup>
          <Styled.CardTheme $color={color}>
            <Styled.CardThemeText>{topic}</Styled.CardThemeText>
          </Styled.CardTheme>

          <Link to={`/card/${id}`}>
            <Styled.CardButton>
              <Styled.CardButtonDot />
              <Styled.CardButtonDot />
              <Styled.CardButtonDot />
            </Styled.CardButton>
          </Link>
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
