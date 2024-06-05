import React from "react"
import { useNavigate } from "react-router-dom"
import { Pages } from "../../../lib/pages"
import * as Styled from "./PopNewCard.styled"
import Calendar from "../../../components/Calendar/Calendar"
import { Topics, TopicsColors } from "../../../data/topics"
import { prevent } from "../../../lib/hooks"


function PopNewCard() {
  const navigate = useNavigate()

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
                  <Styled.PopNewCardFormTaskName $name={true} type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus={true} />
                </Styled.PopNewCardFormBlock>
                <Styled.PopNewCardFormBlock>
                  <Styled.PopNewCardFormLabel htmlFor="textArea">Описание задачи</Styled.PopNewCardFormLabel>
                  <Styled.PopNewCardFormTaskDescription $name={false} name="text" id="textArea" placeholder="Введите описание задачи..." />
                </Styled.PopNewCardFormBlock>
              </Styled.PopNewCardForm>

              <Calendar />
            </Styled.PopNewCardWrap>

            <Styled.PopNewCardCategories>
              <Styled.PopNewCardCategoriesSubtitle>Категория</Styled.PopNewCardCategoriesSubtitle>

              <Styled.PopNewCardCategoriesThemes>
                {
                  Topics.map((item, index) => {
                    const color = TopicsColors[item]

                    return (
                      <Styled.PopNewCardCategoriesTheme key={index} $color={color} $active={false}>
                        <Styled.PopNewCardCategoriesThemeText>{item}</Styled.PopNewCardCategoriesThemeText>
                      </Styled.PopNewCardCategoriesTheme>
                    )
                  })
                }
              </Styled.PopNewCardCategoriesThemes>
            </Styled.PopNewCardCategories>

            <Styled.PopNewCardButtonCreate $hasAccent={true} $width={132} type="button" onClick={closeThis}>Создать задачу</Styled.PopNewCardButtonCreate>
          </Styled.PopNewCardContent>
        </Styled.PopNewCardBlock>
      </Styled.PopNewCardContainer>
    </Styled.PopNewCard>
  )
}

export default PopNewCard
