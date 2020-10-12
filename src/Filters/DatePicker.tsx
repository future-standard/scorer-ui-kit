import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import {format, set, startOfMonth, endOfMonth, eachDayOfInterval, isBefore, isAfter, eachWeekOfInterval, addMonths, endOfWeek, intervalToDuration, isSameMonth, isSameDay, isToday, startOfDay, endOfDay, isWithinInterval } from 'date-fns'

type CellStates = "off" | "single" | "start" | "end" | "inside" | "hover" | "insideHover" ;
type SelectionType = "single" | "interval";

interface TimeProperties {
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

interface TimeRange {
  start: TimeProperties
  end: TimeProperties
}

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
  mode?: SelectionType
  useTime?: boolean
}

const DatePicker : React.FC<IProps> = ({ useTime = false, ...props }) => {

  // TODO: Make useTime toggle.
  // TODO: Allow for single <-> interval changing.

  const now = new Date();
  const defaultTimeRange : TimeRange = { start: { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }, end: { hours: 24, minutes: 0, seconds: 0, milliseconds: 0 } };

  const [focusedMonth, setFocusedMonth] = useState( now );
  const [hoverDay, setHoverDay] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<Interval>( singleDayToInterval(now) );
  const [timeRange, setTimeRange] = useState<TimeRange>(defaultTimeRange);
  const [targetedDate, setTargetedDate] = useState<'start'|'end'|'done'>('start');
  const [mode, setMode] = useState<SelectionType>('interval');

  const weeksOfMonth = eachWeekOfInterval({
    start: startOfMonth(focusedMonth),
    end: endOfMonth(focusedMonth)
  })


  /**
   * Handler for updating picked dates when a calendar day has been selected.
   * @param day The day of the cell that has been clicked / actioned.
   */
  const onCellClick = useCallback((day: Date) => {

    // Sync time from time range.


    //
    if(mode === 'single'){
      setSelectedRange(singleDayToInterval(day));
    } else {

      // === Setting the interval start. ===
      if(targetedDate === 'start'){

        setSelectedRange({
          start: set(day, timeRange.start),
          end: set(day, timeRange.end)//isBefore(day, selectedRange.end) ? selectedRange.end : endOfDay(day)
        });

        setTargetedDate('end');

      // --- Setting the interval end. --
      } else if(targetedDate === 'end' && isAfter(day, selectedRange.start)){

          setSelectedRange({
            start: set(selectedRange.start, timeRange.start),
            end: set(day, timeRange.end)
          });

          setTargetedDate('done');

      // --- Restart journey if another interaction started. --
      } else if(targetedDate === 'end' || targetedDate === 'done'){

        setSelectedRange({
          start: set(day, timeRange.start),
          end: set(day, timeRange.end)
        });
        setTargetedDate('end');

      }
    }
  }, [timeRange, selectedRange, setSelectedRange, targetedDate, setTargetedDate, startOfDay, endOfDay, isBefore, isAfter, singleDayToInterval])


  /**
   * Used to enforce rules on time selection in dateRange, reflect those in timeRange that powers the UI time
   * and apply it to the date intended for integration, selectedRange.
   * @param target Which end of the interval we are updating.
   * @param unit The unit we are updating, either the hour or minute.
   * @param value The new value that will be set in the update.
   */
  const updateTimeInDate = useCallback((target : 'start'|'end', unit : 'hours'|'minutes', value : number) => {

    const {start, end} = timeRange;
    const originalValue : number = timeRange[target][unit];

    if(target === 'start'){
      start[unit] = value
    } else {
      end[unit] = value
    }

    // === Enforce time limitations. ===
    // No minute above 24:00 for end time.
    end.minutes = (end.hours === 24 && end.minutes > 0) ? 0 : end.minutes;

    // Time interval should be at least one minute - if not, revert back.
    if(timeLaterOrSame(start, end)){
      if(target === 'start'){
        start[unit] = originalValue
      } else {
        end[unit] = originalValue
      }
    }

    // === Process values for actual usage ===
    // Prepared values for API use. Midnight is always 24:00 minus 1ms.
    const processedTimeRange : TimeRange = {
      start: {
        hours: start.hours,
        minutes: start.minutes,
        seconds: 0,
        milliseconds: 0
      },
      end: {
        hours: end.hours === 24 ? 23 : end.hours,
        minutes: end.hours === 24 ? 59 : end.minutes,
        seconds: end.hours === 24 ? 59 : 0,
        milliseconds: end.hours === 24 ? 999 : 0
      }
    }

    // === Finish Up. ===
    // Commit changes to timeRange that powers UI.
    setTimeRange({...{start, end}});

    // Apply time to the selected ranges Interval the date-fns way.
    setSelectedRange({
      start: set(selectedRange.start, processedTimeRange.start),
      end: set(selectedRange.end, processedTimeRange.end)
    });

  }, [selectedRange, setSelectedRange, setTimeRange])


  return <Container>

    <button onClick={ () => mode === 'single' ? setMode('interval') : setMode('single') }>Mode: {mode}</button>
    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, -1) ) }>Prev</button>
    <h3>{format(focusedMonth, "yyyy/MM")}</h3>
    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, 1) ) }>Next</button>
    <button onClick={ () => setFocusedMonth( now ) }>This Month</button>

    <div>From: { format(selectedRange.start, "yyyy/MM/dd HH:mm:ss.SSS") }</div>
    {useTime && <div>
      <input type="number" min="0" max="23" value={ clockFormatNumber(timeRange.start.hours) } onChange={ ({target}) => { updateTimeInDate( 'start', 'hours', parseInt(target.value) ) }} />
      <input type="number" min="0" max="59" value={ clockFormatNumber(timeRange.start.minutes) } onChange={ ({target}) => { updateTimeInDate( 'start', 'minutes', parseInt(target.value) ) }} />
    </div>}

    {mode === 'interval' && <div>
      <div>To: { format(selectedRange.end, "yyyy/MM/dd HH:mm:ss.SSS") }</div>
      {useTime && <div>
        <input type="number" min="0" max="24" value={ clockFormatNumber(timeRange.end.hours) } onChange={ ({target}) => { updateTimeInDate( 'end', 'hours', parseInt(target.value) ) }} />
        <input type="number" min="0" max="59" value={ clockFormatNumber(timeRange.end.minutes) } onChange={ ({target}) => { updateTimeInDate( 'end', 'minutes', parseInt(target.value) ) }} />
      </div>}
    </div>
    }

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

/**
 * Check that the end time is later than the start.
 * @param startTime The start time.
 * @param endTime The end time.
 */
const timeLaterOrSame = (startTime : TimeProperties, endTime : TimeProperties ) : boolean => {

  const start = (startTime.hours * 3600) + (startTime.minutes * 60) + startTime.seconds;
  const end = (endTime.hours * 3600) + (endTime.minutes * 60) + endTime.seconds;

  return start >= end;
}

export default DatePicker;