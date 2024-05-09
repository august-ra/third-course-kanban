import React from "react"
import CalendarCell from "./CalendarCell/CalendarCell.jsx"


const CalendarCells = ({ monthAsDate }) => {
  // TODO: calculate first day of calendar
  // TODO: generate all cells

  return (
    <div className="calendar__cells">
      <CalendarCell day={30} isCurrentMonth={false} />
      <CalendarCell day={31} isCurrentMonth={false} />

      <CalendarCell day={ 1} />
      <CalendarCell day={ 2} />
      <CalendarCell day={ 3} />
      <CalendarCell day={ 4} isWeekend={true} />
      <CalendarCell day={ 5} isWeekend={true} />
      <CalendarCell day={ 6} />
      <CalendarCell day={ 7} />
      <CalendarCell day={ 8} />
      <CalendarCell day={ 9} isNow={true} />
      <CalendarCell day={10} />
      <CalendarCell day={11} isWeekend={true} />
      <CalendarCell day={12} isWeekend={true} />
      <CalendarCell day={13} />
      <CalendarCell day={14} />
      <CalendarCell day={15} />
      <CalendarCell day={16} />
      <CalendarCell day={17} />
      <CalendarCell day={18} isWeekend={true} />
      <CalendarCell day={19} isWeekend={true} />
      <CalendarCell day={20} />
      <CalendarCell day={21} />
      <CalendarCell day={22} />
      <CalendarCell day={23} />
      <CalendarCell day={24} />
      <CalendarCell day={25} isWeekend={true} />
      <CalendarCell day={26} isWeekend={true} />
      <CalendarCell day={27} />
      <CalendarCell day={28} />
      <CalendarCell day={29} />
      <CalendarCell day={30} />
      <CalendarCell day={31} />

      <CalendarCell day={ 1} isCurrentMonth={false} isWeekend={true} />
      <CalendarCell day={ 2} isCurrentMonth={false} isWeekend={true} />
    </div>
  )
}

export default CalendarCells
