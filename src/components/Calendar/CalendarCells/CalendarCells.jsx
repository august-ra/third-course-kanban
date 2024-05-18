import React from "react"
import CalendarCell from "./CalendarCell/CalendarCell"


const CalendarCells = ({ activeDate, monthAsDate }) => {
  const month = monthAsDate.getMonth()

  const getFiveOrSixWeeks = (date) => {
    const result = []

    /* recursion */
    const fillLeftPart = function (date, other = false) {
      const day       = date.getDate()
      const dayOfWeek = date.getDay()

      if (dayOfWeek > 1) {
        const date2 = date.copy()
        fillLeftPart(new Date(date2.setDate(date2.getDate() - 1)), true)
      }

      result.push({
        date:   date.copy(),
        number: day,
        day:    dayOfWeek,
        other:  other,
      })
    }

    date.setDate(1)

    let dayOfWeek = date.getDay()
    let day       = 1

    if (dayOfWeek > 1)
      fillLeftPart(date)
    else
      result.push({
        date:   date.copy(),
        number: day,
        day:    dayOfWeek,
        other:  false,
      })

    let calendarLimit = 42

    while (result.length < calendarLimit) {
      date.setDate(date.getDate() + 1)
      ++day
      dayOfWeek = dayOfWeek > 6 ? 1 : dayOfWeek + 1

      const isOtherMonth = date.getMonth() !== month || date.getFullYear() !== monthAsDate.getFullYear()

      if (isOtherMonth) {
        day = date.getDate()

        if (result.length < 35)
          calendarLimit = 35
      }

      result.push({
        date:   date.copy(),
        number: day,
        day:    dayOfWeek,
        other:  isOtherMonth,
      })
    }

    return result
  }

  return (
    <div className="calendar__cells">
      {
        getFiveOrSixWeeks(monthAsDate.copy()).map((item) => {
          const isNow = item.date.getTime() === monthAsDate.getTime()
          const isWeekend = item.day > 5
          const isActive = item.date.getTime() === dt.getTime()
          const key = item.date.shortBackwardPrint()

          return <CalendarCell key={key} date={key} day={item.number} isCurrentMonth={!item.other} isWeekend={isWeekend} isNow={isNow} isActive={isActive} />
        })
      }
    </div>
  )
}

export default CalendarCells
