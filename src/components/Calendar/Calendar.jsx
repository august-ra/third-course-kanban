import { useState } from "react"
import * as Styled from "./Calendar.styled"
import * as Graphics from "../Graphics/Graphics"
import CalendarCells from "./CalendarCells/CalendarCells"
import { ShortDaysOfWeek } from "../../data/datesParts"


function Calendar({ activeDate, setActiveDate }) {
  const [currentDate] = useState(new Date().getBeggingOfDay())
  const [monthAsDate, setMonthAsDate] = useState(getDateFromTwo(activeDate, currentDate))
  const formatedDate = activeDate ? activeDate.printShort() : ""

  function getDateFromTwo(lhs, rhs) {
    return (lhs ? lhs : rhs).getBeggingOfMonth()
  }

  function goToAnotherMonth(day) {
    monthAsDate.setDate(day)

    setMonthAsDate(monthAsDate.getBeggingOfMonth())
  }

  function handleGoToPreviousMonth() {
    goToAnotherMonth(0)
  }

  function handleGoToNextMonth() {
    goToAnotherMonth(40)
  }

  function handleSelectDay(event) {
    event.preventDefault()

    const date = getDateFromTwo(monthAsDate, currentDate)
    date.setDate(event.target.innerText)

    setActiveDate(date)
  }

  return (
    <Styled.Calendar>
      <Styled.CalendarTitle>Даты</Styled.CalendarTitle>
      <Styled.CalendarBlock>
        <Styled.CalendarNav>
          <Styled.CalendarMonth>{monthAsDate.printMonthAndYear()}</Styled.CalendarMonth>
          <Styled.CalendarNavActions>
            <Styled.CalendarNavAction data-action="prev" onClick={handleGoToPreviousMonth}>
              <Graphics.LeftArrow />
            </Styled.CalendarNavAction>
            <Styled.CalendarNavAction data-action="next" onClick={handleGoToNextMonth}>
              <Graphics.RightArrow />
            </Styled.CalendarNavAction>
          </Styled.CalendarNavActions>
        </Styled.CalendarNav>

        <Styled.CalendarContent>
          <Styled.CalendarDaysNames>
            {
              ShortDaysOfWeek.map((item, index) => (
                <Styled.CalendarDayName key={index} $weekend={index > 4}>{item}</Styled.CalendarDayName>
              ))
            }
          </Styled.CalendarDaysNames>

          <CalendarCells currentDate={currentDate} activeDate={activeDate} monthAsDate={monthAsDate} handleSelectDay={handleSelectDay} />
        </Styled.CalendarContent>

        <input type="hidden" id="datepick_value" value={formatedDate} />

        <Styled.CalendarPeriod>
          <Styled.CalendarPeriodText>
            {
              activeDate
                ? <>Срок исполнения: <span className="date-control">{formatedDate}</span></>
                : <>Выберите срок исполнения <span className="date-control"></span>.</>
            }
          </Styled.CalendarPeriodText>
        </Styled.CalendarPeriod>
      </Styled.CalendarBlock>
    </Styled.Calendar>
  )
}

export default Calendar
