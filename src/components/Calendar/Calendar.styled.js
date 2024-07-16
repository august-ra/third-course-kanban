import styled, { css } from "styled-components"
import * as Shared from "../SharedStyles"


export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;

  ${Shared.Subtitle};

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`

export const CalendarBlock = styled.div`
  display: block;
`

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`

export const CalendarMonth = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`

export const CalendarNavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CalendarNavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  user-select: none;

  ${Shared.FlexCenter};

  & svg {
    fill: #94A6BE;
  }

  &:hover svg {
    fill: #87A9DD;
    transform: scale(1.35);
  }
`

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`

export const CalendarPeriodText = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  margin-bottom: 14px;

  & span {
    color: ${(props) => props.theme.$text};
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`


export const CalendarDaysNames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`

export const CalendarDayName = styled.div`
  color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  ${(props) => props.$weekend && CalendarWeekend};

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`

export const CalendarCells = styled.div`
  width: 182px;
  height: ${(props) => props.$height}px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    justify-content: space-around;
  }
`

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  ${Shared.FlexCenter};

  ${getCellStyle};

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`

export const CalendarNormalCell = (props) => css`
  color: ${props.$color};

  &:hover {
    background-color: ${props.$hover};
  }
`

export const CalendarActiveCell = (props) => css`
  background-color: ${props.$color};
  color: ${props.theme.isLight() ? "#FFFFFF" : "#151419"};
`

export const CalendarCurrentDay = (props) => css`
  color: ${props.$color};
  font-weight: 700;

  &:hover {
    background-color: ${props.$hover};
  }
`

export const CalendarActiveCurrentDay = (props) => css`
  color: ${props.theme.isLight() ? "#FFFFFF" : "#151419"};
  background-color: ${props.$color};
  font-weight: 700;
`

export const CalendarWeekend = (props) => css`
  color: #BE94A6;

  &:hover {
    background-color: ${props.theme.$calendar};
  }
`

export const CalendarOtherMonth = css`
  opacity: 0;
`

/* style logics */

function getCellStyle(props) {
  if (!props.$currentMonth)
    return CalendarOtherMonth

  if (props.$current && props.$weekend)
    props = {
      ...props,
      $color: "#CB87A9",
      $hover: "#F6EEEA",
    }
  else if (props.$weekend)
    props = {
      ...props,
      $color: "#BE94A6",
      $hover: "#F6EEEA",
    }
  else if (props.$current)
    props = {
      ...props,
      $color: "#87A9CB",
      $hover: "#DDF1FF",
    }
  else
    props = {
      ...props,
      $color: "#94A6BE",
      $hover: "#EAEEF6",
    }

  if (props.theme.isDark())
    props.$hover = "#151419"

  if (props.$active && props.$current)
    return CalendarActiveCurrentDay(props)
  else if (props.$active)
    return CalendarActiveCell(props)
  else if (props.$current)
    return CalendarCurrentDay(props)
  else
    return CalendarNormalCell(props)
}
