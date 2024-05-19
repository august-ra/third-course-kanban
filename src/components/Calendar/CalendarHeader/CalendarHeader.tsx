import { JSX } from "react"


function CalendarHeader(): JSX.Element {
  return (
    <div className="calendar__days-names">
      <div className="calendar__day-name">пн</div>
      <div className="calendar__day-name">вт</div>
      <div className="calendar__day-name">ср</div>
      <div className="calendar__day-name">чт</div>
      <div className="calendar__day-name">пт</div>
      <div className="calendar__day-name -weekend-">сб</div>
      <div className="calendar__day-name -weekend-">вс</div>
    </div>
  )
}

export default CalendarHeader
