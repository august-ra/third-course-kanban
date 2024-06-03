import { useState } from "react"
import * as Styled from "./Calendar.styled"
import * as Graphics from "../Graphics/Graphics"
import CalendarCells from "./CalendarCells/CalendarCells"
import { ShortDaysOfWeek } from "../../data/datesParts"


function Calendar({ activeDate }) {
  const [monthAsDate, setMonthAsDate] = useState(new Date())

  // TODO: 'prev' and 'next' buttons
  // TODO: day click

  return (
    <Styled.Calendar>
      <Styled.CalendarTitle>Даты</Styled.CalendarTitle>
      <Styled.CalendarBlock>
        <Styled.CalendarNav>
          <Styled.CalendarMonth>{monthAsDate.printMonthAndYear()}</Styled.CalendarMonth>
          <Styled.CalendarNavActions>
            <Styled.CalendarNavAction data-action="prev">
              <Graphics.LeftArrow />
            </Styled.CalendarNavAction>
            <Styled.CalendarNavAction data-action="next">
              <Graphics.RightArrow />
            </Styled.CalendarNavAction>
          </Styled.CalendarNavActions>
        </Styled.CalendarNav>

        <Styled.CalendarContent>
          <Styled.CalendarDaysNames>
            {
              ShortDaysOfWeek.map((item, index) => {
                return (
                  <Styled.CalendarDayName key={index} $weekend={index > 4}>{item}</Styled.CalendarDayName>
                )
              })
            }
          </Styled.CalendarDaysNames>

          <CalendarCells activeDate={activeDate} monthAsDate={monthAsDate} />
        </Styled.CalendarContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />

        <Styled.CalendarPeriod>
          <Styled.CalendarPeriodText>
            {
              activeDate
                ? <>Срок исполнения: <span className="date-control">{activeDate.printShort()}</span></>
                : <>Выберите срок исполнения <span className="date-control"></span>.</>
            }
          </Styled.CalendarPeriodText>
        </Styled.CalendarPeriod>
      </Styled.CalendarBlock>
    </Styled.Calendar>
  )
}

export default Calendar
