import React from "react"
import * as Styled from "../../../pages/PopupsCards/PopCard.styled"
import { Topics, TopicsColors } from "../../../data/topics"


function TopicsRadioGroup({ topic, handleChangeTopic }) {
  return (
    <Styled.PopCardCategoriesThemes id="topic">
      {
        Topics.map((item, index) => {
          // const inputId = `radio${index}`
          const color = TopicsColors[item]
          const isActive = topic === item

          const handleClick = () => handleChangeTopic(item)

          return (
            <Styled.PopCardCategoriesTheme key={index} $color={color} $active={isActive} onClick={handleClick}>
              <Styled.PopCardCategoriesThemeText>{item}</Styled.PopCardCategoriesThemeText>

              <input type="radio" name="topic" hidden />
            </Styled.PopCardCategoriesTheme>
          )
        })
      }
    </Styled.PopCardCategoriesThemes>
  )
}

export default TopicsRadioGroup
