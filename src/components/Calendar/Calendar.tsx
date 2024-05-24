import { Dispatch, FC as ReactFC, SetStateAction, useState } from "react"
import CalendarHeader from "./CalendarHeader/CalendarHeader"
import CalendarCells from "./CalendarCells/CalendarCells"
import Graphics from "../Graphics/Graphics"


interface CalendarProps {
  activeDate?: Date
}

function Calendar({ activeDate }: CalendarProps): ReactFC {
  const [monthAsDate, setMonthAsDate]: [Date, Dispatch<SetStateAction<Date>>] = useState<Date>(new Date())

  // TODO: 'prev' and 'next' buttons
  // TODO: day click

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">{monthAsDate.printMonthAndYear()}</div>
          <div className="nav__actions">
            <div className="nav__action" data-action="prev">
              <Graphics.LeftArrow />
            </div>
            <div className="nav__action" data-action="next">
              <Graphics.RightArrow />
            </div>
          </div>
        </div>

        <div className="calendar__content">
          <CalendarHeader />
          <CalendarCells activeDate={activeDate} monthAsDate={monthAsDate} />
        </div>

        <input type="hidden" id="datepick_value" value="08.09.2023" />

        <div className="calendar__period">
          <p className="calendar__p date-end">
            {
              activeDate
                ? <>Срок исполнения: <span className="date-control">{activeDate.printShort()}</span></>
                : <>Выберите срок исполнения <span className="date-control"></span>.</>
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Calendar
