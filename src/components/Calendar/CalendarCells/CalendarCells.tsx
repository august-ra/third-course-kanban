import { FC as ReactFC } from "react"
import CalendarCell from "../CalendarCell/CalendarCell"


interface CalendarCellsProps {
  activeDate:   Date
  currentDate?: Date // TODO: check it again about <?>
  monthAsDate:  Date
}

interface CalendarCellData {
  date:   Date
  number: number
  day:    number
  other:  boolean
}

function CalendarCells({ activeDate, currentDate, monthAsDate }: CalendarCellsProps): ReactFC {
  const month: number = monthAsDate.getMonth()

  const getFiveOrSixWeeks = (date: Date): CalendarCellData[] => {
    const result: CalendarCellData[] = []

    /* recursion */
    const fillLeftPart = function (date: Date, other: boolean = false) {
      const day:       number = date.getDate()
      const dayOfWeek: number = date.getDay()

      if (dayOfWeek > 1) {
        const date2: Date = date.copy()
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

    let dayOfWeek: number = date.getDay()
    let day:       number = 1

    if (dayOfWeek > 1)
      fillLeftPart(date)
    else
      result.push({
        date:   date.copy(),
        number: day,
        day:    dayOfWeek,
        other:  false,
      })

    let calendarLimit: number = 42

    while (result.length < calendarLimit) {
      date.setDate(date.getDate() + 1)
      ++day
      dayOfWeek = dayOfWeek > 6 ? 1 : dayOfWeek + 1

      const isOtherMonth: boolean = date.getMonth() !== month || date.getFullYear() !== monthAsDate.getFullYear()

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
        getFiveOrSixWeeks(monthAsDate.copy()).map((item: CalendarCellData) => {
          const isNow:     boolean = item.date.getTime() === monthAsDate.getTime()
          const isWeekend: boolean = item.day > 5
          const isActive:  boolean = activeDate && item.date.getTime() === activeDate.getTime()
          const key:       string  = item.date.shortBackwardPrint()

          return <CalendarCell key={key} date={key} day={item.number} isCurrentMonth={!item.other} isWeekend={isWeekend} isNow={isNow} isActive={isActive} />
        })
      }
    </div>
  )
}

export default CalendarCells
