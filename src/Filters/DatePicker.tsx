import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

import {format, startOfMonth, endOfMonth, eachDayOfInterval, isBefore, isAfter, eachWeekOfInterval, addMonths, endOfWeek, intervalToDuration, isSameMonth, isSameDay, isToday, startOfDay, endOfDay, isWithinInterval, getMinutes, setMinutes, endOfMinute, setMilliseconds, getHours, setHours } from 'date-fns'

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
    opacity: 1;

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
  const [timeRange, setTimeRange] = useState<any>({ start: { hours: 0, minutes: 0, milliseconds: 0 }, end: { hours: 23, minutes: 59, milliseconds: 999 } });
  const [targetedDate, setTargetedDate] = useState<'start'|'end'|'done'>('start');
  const [pickerMode, setPickerMode] = useState<SelectionType>('interval');

  const weeksOfMonth = eachWeekOfInterval({
    start: startOfMonth(focusedMonth),
    end: endOfMonth(focusedMonth)
  })

  const onCellClick = (day: Date) => {

    if(pickerMode === 'single'){
      setSelectedRange(singleDayToInterval(day));
    } else {

      // === Setting the interval start. ===
      if(targetedDate === 'start'){

        setSelectedRange({
          start: startOfDay(day),
          end: isBefore(day, selectedRange.end) ? selectedRange.end : endOfDay(day)
        });

        setTargetedDate('end');

      // --- Setting the interval end. --
      } else if(targetedDate === 'end' && isAfter(day, selectedRange.start)){

          setSelectedRange({
            start: selectedRange.start,
            end: endOfDay(day)
          });

          setTargetedDate('done');

      // --- Restart journey if another interaction started. --
      } else if(targetedDate === 'end' || targetedDate === 'done'){

        setSelectedRange({
          start: startOfDay(day),
          end: endOfDay(day)
        });
        setTargetedDate('end');

      }
    }
  }

  const updateTimeInDate = useCallback((target : 'start'|'end', unit : 'hours'|'minutes', newValue : number) => {

    // TODO: Check if they're on the same day that it doesn't end before it starts.

    // Update the state that manages the time range in the UI and allow for 24:00
    let newTimeRange = { ...timeRange };

    if(target === 'end' && unit === 'hours' && newValue === 24){
      newTimeRange.end.minutes = 0;
    }

    newTimeRange[target][unit] = newValue;
    setTimeRange(newTimeRange);

    // Update the state of the actual time value for date picking use.
    let cleanTimeRange = {
      start: {
        hours: newTimeRange.start.hours,
        minutes: newTimeRange.start.minutes,
        milliseconds: 0
      },
      end: {
        hours: newTimeRange.end.hours === 24 ? 23 : newTimeRange.end.hours,
        minutes: newTimeRange.end.hours === 24 ? 59 : newTimeRange.end.minutes,
        milliseconds: newTimeRange.end.hours === 24 ? 999 : 0
      }
    }

    setSelectedRange({
      start: setHours( setMinutes( setMilliseconds(selectedRange.start, cleanTimeRange.start.milliseconds), cleanTimeRange.start.minutes), cleanTimeRange.start.hours),
      end:   setHours( setMinutes( setMilliseconds(selectedRange.end, cleanTimeRange.end.milliseconds), cleanTimeRange.end.minutes), cleanTimeRange.end.hours)
    });

  }, [selectedRange, setSelectedRange, setTimeRange])

  return <Container>

    <button onClick={ () => pickerMode === 'single' ? setPickerMode('interval') : setPickerMode('single') }>Mode: {pickerMode}</button>
    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, -1) ) }>Prev</button>
    <h3>{format(focusedMonth, "yyyy/MM")}</h3>
    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, 1) ) }>Next</button>
    <button onClick={ () => setFocusedMonth( now ) }>This Month</button>

    <div>From: { format(selectedRange.start, "yyyy/MM/dd HH:mm.SSS") }</div>
    <div>
      <input type="number" min="0" max="23" value={ clockFormatNumber(timeRange.start.hours) } onChange={ ({target}) => { updateTimeInDate( 'start', 'hours', parseInt(target.value) ) }} />
      <input type="number" min="0" max="59" value={ clockFormatNumber(timeRange.start.minutes) } onChange={ ({target}) => { updateTimeInDate( 'start', 'minutes', parseInt(target.value) ) }} />
    </div>

    <div>To: { format(selectedRange.end, "yyyy/MM/dd HH:mm.SSS") }</div>
    <div>
      <input type="number" min="0" max="24" value={ clockFormatNumber(timeRange.end.hours) } onChange={ ({target}) => { updateTimeInDate( 'end', 'hours', parseInt(target.value) ) }} />
      <input type="number" min="0" max="59" value={ clockFormatNumber(timeRange.end.minutes) } onChange={ ({target}) => { updateTimeInDate( 'end', 'minutes', parseInt(target.value) ) }} />
    </div>

    <div>Hover: { hoverDay && format(hoverDay, "yyyy/MM/dd") }</div>

    <CalRow>
      {DayGuide.map((day, index) => {
        return <CalCell key={index}>{day}</CalCell>;
      })}
    </CalRow>

    { weeksOfMonth.map((week, index)=>{
      const days = eachDayOfInterval({
        start: week,
        end: endOfWeek(week)
      })

      return <CalRow key={index}>
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

  if( isWithinInterval(day, interval) || isSameDay(interval.start, day) ){

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

const clockFormatNumber = (value : number) => {
  const valAsString = value.toString();

  return (valAsString.length === 1) ? '0' + value : value;
}

export default DatePicker;