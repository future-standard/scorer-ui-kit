import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import {format, startOfMonth, endOfMonth, eachDayOfInterval, eachWeekOfInterval, addMonths, endOfWeek, intervalToDuration, isSameMonth, isSameDay, isToday, startOfDay, endOfDay, isWithinInterval } from 'date-fns'

type CellStates = "off" | "single" | "start" | "end" | "inside" ;

const Container = styled.div``;

const CalRow = styled.div`
  display: flex;

`
const CalCell = styled.div<{ thisMonth?: boolean, isToday?: boolean, state?: CellStates }>`
  flex: 0 0 40px;
  padding: 10px;
  border-radius: 5px;

  ${({thisMonth}) => !thisMonth  && css`
    opacity: 0.5;
  `}

  ${({isToday}) => isToday  && css`
    font-style: italic;
  `}

  ${({state}) => (state === 'single' || state === 'start' || state === 'end') && css`
    background: #aaf;
  `}

  ${({state}) => (state === 'inside') && css`
    background: #aaf;
  `}

`

const DayGuide : string[] = [
  "S", "M", "T", "W", "T", "F", "S"
  // "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

interface IProps {
  initialDates?: Date | Date[]
  selectionType?: "single" | "interval"
  useTime?: boolean
}

const DatePicker : React.FC<IProps> = ({ selectionType = "single", useTime = false }) => {

  const now = new Date();

  const [focusedMonth, setFocusedMonth] = useState( now );
  const [selectedRange, setSelectedRange] = useState<Interval>( singleDayToInterval(now) );

  const weeksOfMonth = eachWeekOfInterval({
    start: startOfMonth(focusedMonth),
    end: endOfMonth(focusedMonth)
  })

  return <Container>

    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, -1) ) }>Prev</button>
    <h3>{format(focusedMonth, "yyyy/MM")}</h3>
    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, 1) ) }>Next</button>
    <button onClick={ () => setFocusedMonth( now ) }>This Month</button>

    <CalRow>
      {DayGuide.map((day) => {
        return <CalCell>{day}</CalCell>;
      })}
    </CalRow>

    { weeksOfMonth.map((week)=>{
      const days = eachDayOfInterval({
        start: week,
        end: endOfWeek(week)
      })

      return <CalRow>
        { days.map((day) => {
          return <CalCell onClick={ () => setSelectedRange(singleDayToInterval(day)) } state={ cellState(day, selectedRange) } thisMonth={ isSameMonth(day, focusedMonth) } isToday={ isToday(day) }>{format(day, "d")}</CalCell>
        })}
      </CalRow>

    }) }

  </Container>

};

/**
 * Used to work out the state of the calendar cell in regards to selection or position in
 * the date range.
 * @param day Date - The date of the cell in the calendar.
 * @param interval Interval - The date range that is active in the calendar.
 */
const cellState = (day: Date, interval: Interval) : CellStates => {

  let state : CellStates = "off";

  const singleDayRange : boolean = intervalToDuration(interval).days === 0;

  if( isWithinInterval(day, interval) ){

    if(singleDayRange){
      state = "single";
    } else if(isSameDay(interval.start, day)){
      state = "start";
    } else if(isSameDay(interval.end, day)){
      state = "end";
    } else {
      state = "inside";
    }

  }

  return state;
}

/**
 * Convert a single days duration to an interval.
 * @param day The day to convert to an interval
 */
const singleDayToInterval = (day: Date) : Interval => {
  return {
    start: startOfDay(day),
    end: endOfDay(day)
  }
}


export default DatePicker;