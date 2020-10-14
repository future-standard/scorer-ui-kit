import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icons/Icon';
import DateTimeBlock from './DateTimeBlock';

import {format, set, startOfMonth, endOfMonth, eachDayOfInterval, isAfter, eachWeekOfInterval, addMonths, endOfWeek, intervalToDuration, isSameMonth, isSameDay, isToday, startOfDay, endOfDay, isWithinInterval } from 'date-fns'

type CellStates = "off" | "single" | "start" | "end" | "inside" | "hover" | "insideHover" ;
type DateMode = "single" | "interval";
type TimeMode = "off" | "single" | "interval";

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

const Container = styled.div`
  display: flex;
`;

const DateTimeArea = styled.div`
  flex: 0 0 170px;
  height: 100%;
  border-right: #f1f1f1 1px solid;
`

const CalendarArea = styled.div`
  flex: 1;
  user-select: none;
`

const CalendarHeader = styled.div`

  display: flex;
  height: 70px;
  border-bottom: #f1f1f1 1px solid;

  color: #8ea0b9;
  font-weight: 500;
  font-size: 20px;
  text-align: center;

  span {
    display: block;
    font-size: 10px;
  }
`
const CurrentMonth = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    flex: 0;
  }
`

const PaginateMonth = styled.button`
  cursor: pointer;
  flex: 0 0 90px;

  border: none;
  background: transparent;
  outline: none;
  font-weight: 500;
  text-transform: uppercase;

  flex: 0 0 90px;
  color: #c1c1c1;

  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    color: #fff;
    background: transparent;
    background-image: linear-gradient(315deg, #59b1ef, #2bbbec);
  }

`

const CalRow = styled.div`
  display: flex;
  height: 40px;
  font-size: 12px;
  font-weight: 400;
  padding: 0 10px;
`

const CalHRow = styled(CalRow)`
  border-bottom: #f1f1f1 1px solid;

`

const CalCell = styled.div`
  flex: 0 0 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #767f86;
  font-weight: 500;
`

const CalHCell = styled(CalCell)`
  display: flex;
  color: #C9C9C9;


`

const CalCellB = styled(CalCell)<{ thisMonth?: boolean, isToday?: boolean, state?: CellStates }>`
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
    background-image: linear-gradient(315deg, #59b1ef, #2bbbec);
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
    background: #ebf8fe;
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
  dateMode: DateMode
  timeMode: TimeMode
}

const DatePicker : React.FC<IProps> = (props) => {

  // TODO: Have a function to output tidied up data for the configuration.
  // TODO: Intitialise an initial date set.

  // Bug checking
  // - Allow for single <-> interval changing.
  // - UI correctly reflects timeMode and dateMode

  const now = new Date();
  const defaultTimeRange : TimeRange = { start: { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }, end: { hours: 24, minutes: 0, seconds: 0, milliseconds: 0 } };

  const [focusedMonth, setFocusedMonth] = useState( now );
  const [hoverDay, setHoverDay] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<Interval>( singleDayToInterval(now) );
  const [timeRange, setTimeRange] = useState<TimeRange>(defaultTimeRange);
  const [targetedDate, setTargetedDate] = useState<'start'|'end'|'done'>('start');
  const [dateMode, setDateMode] = useState<DateMode>('interval');
  const [timeMode, setTimeMode] = useState<TimeMode>(props.timeMode);

  const weeksOfMonth = eachWeekOfInterval({
    start: startOfMonth(focusedMonth),
    end: endOfMonth(focusedMonth)
  })

  useEffect(()=>{

    setTimeRange(defaultTimeRange);

  }, [timeMode, setTimeRange])

  /**
   * Handler for updating picked dates when a calendar day has been selected.
   * @param day The day of the cell that has been clicked / actioned.
   */
  const onCellClick = useCallback((day: Date) => {

    if(dateMode === 'single'){

      // === Single Mode ===
      setSelectedRange(singleDayToInterval(day));

    } else {

      // === Interval Mode ===
      // Setting the interval end (assuming it's later than the start).
      if(targetedDate === 'end' && isAfter(day, selectedRange.start)){

          setSelectedRange({
            start: set(selectedRange.start, timeRules(timeRange.start)),
            end: set(day, timeRules(timeRange.end))
          });

          setTargetedDate('done');

      // For first interaction || setting the end date correctly || if completed and restarting.
      } else if(targetedDate === 'start' || targetedDate === 'end' || targetedDate === 'done'){

        setSelectedRange({
          start: set(day, timeRules(timeRange.start)),
          end: set(day, timeRules(timeRange.end))
        });

        setTargetedDate('end');

      }
    }
  }, [timeRange, selectedRange, setSelectedRange, targetedDate, setTargetedDate, isAfter, singleDayToInterval])


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

    // === Finish Up. ===
    // Commit changes to timeRange that powers UI.
    setTimeRange({...{start, end}});

    // Apply time to the selected range Interval.
    setSelectedRange({
      start: set(selectedRange.start, timeRules(start)),
      end: set(selectedRange.end, timeRules(end))
    });

  }, [selectedRange, setSelectedRange, setTimeRange])


  return <Container>

      <DateTimeArea>
        <DateTimeBlock title={"From"} hasDate={ true } hasTime={ timeMode != 'off' } />
        <DateTimeBlock title={"To"} hasDate={ dateMode == 'interval' } hasTime={ timeMode == 'interval' } />
      </DateTimeArea>

      <CalendarArea>

        <CalendarHeader>

          <PaginateMonth onClick={ () => setFocusedMonth( addMonths(focusedMonth, -1) ) }>
            <Icon icon={'Left'} color={'dimmed'} size={10} />
            { format(addMonths(focusedMonth, -1), "MMM") }
          </PaginateMonth>

          <CurrentMonth>
            <span>{ format(focusedMonth, "yyyy") }</span>
            <span></span>{ format(focusedMonth, "MMMM") }
          </CurrentMonth>

          <PaginateMonth onClick={ () => setFocusedMonth( addMonths(focusedMonth, 1) ) }>
            { format(addMonths(focusedMonth, 1), "MMM") }
            <Icon icon={'Right'} color={'dimmed'} size={10} />
          </PaginateMonth>

        </CalendarHeader>

        <CalHRow>
          {DayGuide.map((day, index) => {
            return <CalHCell key={index}>{day}</CalHCell>;
          })}
        </CalHRow>

        { weeksOfMonth.map((week, index)=>{
          const days = eachDayOfInterval({
            start: week,
            end: endOfWeek(week)
          })

        return <CalRow key={index}>
          {days.map((day, index) => {
            return <CalCellB key={index} onClick={ () => onCellClick(day) } onMouseEnter={ () => setHoverDay(day) } onMouseLeave={ () => setHoverDay(null) } state={ cellState(day, selectedRange) } thisMonth={ isSameMonth(day, focusedMonth) } isToday={ isToday(day) }>{format(day, "d")}</CalCellB>
          })}
        </CalRow>

    }) }
      </CalendarArea>


    {/*}
    <button onClick={ () => dateMode === 'single' ? setDateMode('interval') : setDateMode('single') }>Mode: {dateMode}</button>
    <button onClick={ () => timeMode === 'single' ? setTimeMode('interval') : setTimeMode('single') }>Mode: {timeMode}</button>
    <button onClick={ () => setTimeMode('off') }>No Time</button>

    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, -1) ) }>Prev</button>
    <h3>{format(focusedMonth, "yyyy/MM")}</h3>
    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, 1) ) }>Next</button>
    <button onClick={ () => setFocusedMonth( now ) }>This Month</button>

    <div>From: { format(selectedRange.start, "yyyy/MM/dd HH:mm:ss.SSS") }</div>
    {timeMode != 'off' && <div>
      <input type="number" min="0" max="23" value={ clockFormatNumber(timeRange.start.hours) } onChange={ ({target}) => { updateTimeInDate( 'start', 'hours', parseInt(target.value) ) }} />
      <input type="number" min="0" max="59" value={ clockFormatNumber(timeRange.start.minutes) } onChange={ ({target}) => { updateTimeInDate( 'start', 'minutes', parseInt(target.value) ) }} />
    </div>}

    <div>
      {dateMode === 'interval' && <div>To: { format(selectedRange.end, "yyyy/MM/dd HH:mm:ss.SSS") }</div>}
      {timeMode == 'interval' && <div>
        <input type="number" min="0" max="24" value={ clockFormatNumber(timeRange.end.hours) } onChange={ ({target}) => { updateTimeInDate( 'end', 'hours', parseInt(target.value) ) }} />
        <input type="number" min="0" max="59" value={ clockFormatNumber(timeRange.end.minutes) } onChange={ ({target}) => { updateTimeInDate( 'end', 'minutes', parseInt(target.value) ) }} />
      </div>}
    </div>

    <div>Hover: { hoverDay && format(hoverDay, "yyyy/MM/dd") }</div>


    */}

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


/**
 * Convert the time shown in UI to something practical for integration.
 * @param time TimeProperties to apply rules for use in output data.
 */
const timeRules = (time : TimeProperties) : TimeProperties => {

  // Adjust 24:00 to minus 1ms for data usage.
  // Note: Start time limited to 23 by element max attr.
  const processed : TimeProperties = {
    hours: time.hours === 24 ? 23 : time.hours,
    minutes: time.hours === 24 ? 59 : time.minutes,
    seconds: time.hours === 24 ? 59 : 0,
    milliseconds: time.hours === 24 ? 999 : 0
  }

  return processed;

}


export default DatePicker;