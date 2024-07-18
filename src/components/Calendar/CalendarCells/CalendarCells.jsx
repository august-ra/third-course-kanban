import React from "react"
import * as Styled from "../Calendar.styled"
import cachedMonths from "../../../extensions/date"


function CalendarCells({ currentDate, activeDate, monthAsDate, handleSelectDay }) {
  const days = cachedMonths.getCalendar(monthAsDate)

  return (
    <Styled.CalendarCells $height={days.length === 35 ? 126 : 152}>
      {
        days.map((item) => {
          const timestamp = item.date.getTime()

          const isEqual = (date) => {
            return Boolean(date) && timestamp === date.getTime()
          }

          const isNow = isEqual(currentDate)
          const isWeekend = item.day > 5
          const isActive = isEqual(activeDate)
          const key = item.date.shortBackwardPrint()

          return (
            <Styled.CalendarCell key={key} $currentMonth={!item.other} $weekend={isWeekend} $active={isActive} $current={isNow} onClick={handleSelectDay}>
              {item.number}
            </Styled.CalendarCell>
          )
        })
      }
    </Styled.CalendarCells>
  )
}

export default CalendarCells
