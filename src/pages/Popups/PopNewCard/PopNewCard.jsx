import React from "react"
import * as Styled from "./PopNewCard.styled"
import Calendar from "../../../components/Calendar/Calendar"
import { Topics, TopicsColors } from "../../../data/topics"


function PopNewCard() {
  return (
    <Styled.PopNewCard id="popNewCard">
      <Styled.PopNewCardContainer>
        <Styled.PopNewCardBlock>
          <Styled.PopNewCardContent>
            <Styled.PopNewCardTitle>Создание задачи</Styled.PopNewCardTitle>
            <Styled.PopNewCardClose href="#">&#10006;</Styled.PopNewCardClose>

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

            <Styled.PopNewCardButtonCreate $isAccent={true} id="btnCreate">Создать задачу</Styled.PopNewCardButtonCreate>
          </Styled.PopNewCardContent>
        </Styled.PopNewCardBlock>
      </Styled.PopNewCardContainer>
    </Styled.PopNewCard>
  )
}

export default PopNewCard
