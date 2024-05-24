import { FC as ReactFC } from "react"


interface CalendarCellProps {
  date:           string
  day:            number
  isCurrentMonth: boolean
  isWeekend:      boolean
  isNow:          boolean
  isActive:       boolean
}

function CalendarCell({ date, day, isCurrentMonth = true, isWeekend = false, isNow = false, isActive = false }: CalendarCellProps): ReactFC {
  const classNameSuffixes: string[] = []
  classNameSuffixes.push(isCurrentMonth ? "_cell-day"   : "_other-month")
  classNameSuffixes.push(     isWeekend ? "_weekend"    : ""            )
  classNameSuffixes.push(         isNow ? "_current"    : ""            )
  classNameSuffixes.push(      isActive ? "_active-day" : ""            )

  return (
    <div data-id={date} className={`calendar__cell ${classNameSuffixes.join(" ").trim()}`}>{day}</div>
  )
}

export default CalendarCell
