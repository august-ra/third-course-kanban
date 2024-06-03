import { Dispatch, FC as ReactFC, SetStateAction, useState } from "react"
import * as Styled from "./Calendar.styled"
import CalendarCells from "./CalendarCells/CalendarCells"
import Graphics from "../Graphics/Graphics"
import { ShortDaysOfWeek } from "../../data/datesParts"


interface CalendarProps {
  activeDate?: Date
}

function Calendar({ activeDate }: CalendarProps): ReactFC {
  const [monthAsDate, setMonthAsDate]: [Date, Dispatch<SetStateAction<Date>>] = useState<Date>(new Date())

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
              ShortDaysOfWeek.map((item: string, index: number) => {
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
