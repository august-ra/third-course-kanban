import React from "react"
import * as Styled from "../../../pages/PopupsCards/PopCard.styled"
import { Statuses } from "../../../data/statuses"


function StatusRadioGroup({ showAllStatuses, status, handleChangeStatus }) {
  return (
    <Styled.PopCardStatusThemes id="status">
      {
        Statuses.map((item, index) => {
          const isActive = status === item

          if (!showAllStatuses && !isActive)
            return null

          const handleClick = () => handleChangeStatus(item)

          return (
            <Styled.PopCardStatusTheme key={index} $active={isActive} onClick={handleClick}>
              <Styled.PopCardStatusThemeText>{item}</Styled.PopCardStatusThemeText>

              <input type="radio" name="topic" hidden/>
            </Styled.PopCardStatusTheme>
          )
        })
      }
    </Styled.PopCardStatusThemes>
  )
}

export default StatusRadioGroup
