import styled, { css } from "styled-components"
import * as Styled from "../SharedStyles"


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

  ${Styled.CommonSubtitle};

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
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: #94A6BE;
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

  & span {
    color: ${(props) => props.theme.text};
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`


export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`

export const CalendarDayName = styled.div<{ $weekend?: boolean }>`
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
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    justify-content: space-around;
  }
`

export const CalendarCell = styled.div<{ $currentMonth?: boolean, $weekend?: boolean, $active?: boolean, $current?: boolean }>`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  ${(props) => props.$currentMonth ? CalendarNormalCell : CalendarOtherMonth};
  ${(props) => props.$weekend && CalendarWeekend};
  ${(props) => props.$active && CalendarActiveCell};
  ${(props) => props.$current && CalendarCurrentDay};

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`

export const CalendarNormalCell = css`
  &:hover {
    color: #94A6BE;
    background-color: ${(props) => props.theme.body};
  }
`

export const CalendarActiveCell = css`
  background-color: #94A6BE;
  color: ${(props) => props.theme.isLigth() ? "#FFFFFF" : "#151419"};
`

export const CalendarCurrentDay = css`
  font-weight: 700;
`

export const CalendarWeekend = css`
  color: #BE94A6;
`

export const CalendarOtherMonth = css`
  opacity: 0;
`
