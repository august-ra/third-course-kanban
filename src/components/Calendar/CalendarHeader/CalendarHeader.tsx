import { JSX } from "react"
import { ShortDaysOfWeek } from "../../../data/datesParts"


function CalendarHeader(): JSX.Element {
  return (
    <div className="calendar__days-names">
      {
        ShortDaysOfWeek.map((item: string, index: number) => {
          const weekendClass: string = index > 4 ? "_weekend" : ""

          return <div key={index} className={`calendar__day-name ${weekendClass}`}>{item}</div>
        })
      }
    </div>
  )
}

export default CalendarHeader
