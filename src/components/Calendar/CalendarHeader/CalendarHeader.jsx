import React from "react"
import { ShortDaysOfWeek } from "../../../data/datesParts"


const CalendarHeader = () => {
  return (
    <div className="calendar__days-names">
      {
        ShortDaysOfWeek.map((item, index) => {
          const weekend = index > 4 ? "_weekend" : ""

          return <div key={index} className={`calendar__day-name ${weekend}`}>{item}</div>
        })
      }
    </div>
  )
}

export default CalendarHeader
