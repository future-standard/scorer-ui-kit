import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import {format, startOfMonth, endOfMonth, eachDayOfInterval, isBefore, isAfter, eachWeekOfInterval, addMonths, endOfWeek, intervalToDuration, isSameMonth, isSameDay, isToday, startOfDay, endOfDay, isWithinInterval } from 'date-fns'

type CellStates = "off" | "single" | "start" | "end" | "inside" | "hover" | "insideHover" ;
type SelectionType = "single" | "interval";

const Container = styled.div``;

const CalRow = styled.div`
  display: flex;

`
const CalCell = styled.div<{ thisMonth?: boolean, isToday?: boolean, state?: CellStates }>`
  flex: 0 0 40px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  ${({thisMonth}) => !thisMonth  && css`
    opacity: 0.5;
  `}

  ${({isToday}) => isToday  && css`
    border: 2px solid #111;
  `}

  ${({state}) => (state === 'single' || state === 'start' || state === 'end') && css`
    background: hsla(205deg, 85%, 50%, 100%);
    opacity: 1;
  `}

  ${({state}) => (state === 'start') && css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${({state}) => (state === 'end') && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${({state}) => (state === 'insideHover') && css`
    background: #f00 !important;
  `}

  ${({state}) => (state === 'inside') && css`
    background: hsla(205deg, 85%, 65%, 50%);
    border-radius: 0;
  `}

`

const DayGuide : string[] = [
  "S", "M", "T", "W", "T", "F", "S"
  // "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

interface IProps {
  initialDates?: Date | Date[]
  selectionType?: SelectionType
  useTime?: boolean
}

const DatePicker : React.FC<IProps> = ({ selectionType = "single", useTime = false }) => {

  const now = new Date();

  const [focusedMonth, setFocusedMonth] = useState( now );
  const [hoverDay, setHoverDay] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<Interval>( singleDayToInterval(now) );
  const [targetedDate, setTargetedDate] = useState<'start' | 'end' | 'done'>('start');
  const [pickerMode, setPickerMode] = useState<SelectionType>('interval');

  const weeksOfMonth = eachWeekOfInterval({
    start: startOfMonth(focusedMonth),
    end: endOfMonth(focusedMonth)
  })

  const onCellClick = (day: Date) => {

    if(pickerMode === 'single'){
      setSelectedRange(singleDayToInterval(day));
    } else {

      if(targetedDate === 'start'){
        if(isBefore(day, selectedRange.end)){
          setSelectedRange({
            start: startOfDay(day),
            end: selectedRange.end
          });
        } else {
          setSelectedRange({
            start: startOfDay(day),
            end: endOfDay(day)
          });
        }
        setTargetedDate('end');

      } else if(targetedDate === 'end'){

        if(isAfter(day, selectedRange.start)){
          setSelectedRange({
            start: selectedRange.start,
            end: endOfDay(day)
          });

        setTargetedDate('done');

      } else {

          // Jump back to set first date.
          setSelectedRange({
            start: startOfDay(day),
            end: selectedRange.end
          });
          setTargetedDate('end');

        }
      }
    }
  }

  return <Container>

    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, -1) ) }>Prev</button>
    <h3>{format(focusedMonth, "yyyy/MM")}</h3>
    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, 1) ) }>Next</button>
    <button onClick={ () => setFocusedMonth( now ) }>This Month</button>

    <div>From: { format(selectedRange.start, "yyyy/MM/dd") }</div>
    <div>To: { format(selectedRange.end, "yyyy/MM/dd") }</div>
    <div>Hover: { hoverDay && format(hoverDay, "yyyy/MM/dd") }</div>

    <CalRow>
      {DayGuide.map((day, index) => {
        return <CalCell key={index}>{day}</CalCell>;
      })}
    </CalRow>

    { weeksOfMonth.map((week)=>{
      const days = eachDayOfInterval({
        start: week,
        end: endOfWeek(week)
      })

      return <CalRow>
        { days.map((day, index) => {
          return <CalCell key={index} onClick={ () => onCellClick(day) } onMouseEnter={ () => setHoverDay(day) } onMouseLeave={ () => setHoverDay(null) } state={ cellState(day, selectedRange) } thisMonth={ isSameMonth(day, focusedMonth) } isToday={ isToday(day) }>{format(day, "d")}</CalCell>
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
const cellState = (day: Date, interval: Interval, hoverDate? : Date) : CellStates => {

  let state : CellStates = "off";

  const singleDayRange : boolean = intervalToDuration(interval).days === 0;

  if( isWithinInterval(day, interval) ){

    if(singleDayRange){
      state = "single";
    } else if(isSameDay(interval.start, day)){
      state = "start";
    } else if(isSameDay(interval.end, day)){
      state = "end";
    } else if(hoverDate && isAfter(hoverDate, interval.start)){
      state = "insideHover";

    //} else if(??? hover) {
      // state = hover
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