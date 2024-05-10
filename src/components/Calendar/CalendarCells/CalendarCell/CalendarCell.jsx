import React from "react"


const CalendarCell = ({ date, day, isCurrentMonth = true, isWeekend = false, isNow = false, isSelected = false }) => {
  const classNameSuffixes = []
  classNameSuffixes.push(isCurrentMonth ? "_cell-day" : "_other-month")
  classNameSuffixes.push(     isWeekend ? "_weekend"  : ""            )
  classNameSuffixes.push(         isNow ? "_current"  : ""            )
  classNameSuffixes.push(    isSelected ? "_selected" : ""            )

  return (
    <div data-id={date} className={`calendar__cell ${classNameSuffixes.join(" ").trim()}`}>{day}</div>
  )
}

export default CalendarCell
