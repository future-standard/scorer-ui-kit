import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../Icons/Icon';
import DateTimeBlock from '../atoms/DateTimeBlock';

import {format, set, startOfMonth, endOfMonth, eachDayOfInterval, isAfter, eachWeekOfInterval, addMonths, endOfWeek, intervalToDuration, isSameMonth, isSameDay, isToday, startOfDay, endOfDay, isWithinInterval } from 'date-fns';

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
  border-right: ${({theme}) => theme.colors.divider} 1px solid;
  width: 170px;
  display: flex;
  flex-direction: column;

`;

const TimeZoneOption = styled.div`
  border-top: ${({theme}) => theme.colors.divider} 1px solid;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;
const TimeZoneLabel = styled.div`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.filters.subOption.label};
  `}

`;
const TimeZoneValue = styled.div`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
    ${theme.typography.filters.subOption.value};
  `}
`;

const CalendarArea = styled.div`
  user-select: none;
`;

const CalendarHeader = styled.div`
  display: flex;
  height: 70px;
  border-bottom: ${({theme}) => theme.colors.divider} 1px solid;
  text-align: center;
`;
const CurrentMonth = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({theme})=> theme.typography.filters.datepicker.focusedMonth};
  span {
    display: block;
    flex: 0;
    ${({theme})=> theme.typography.filters.datepicker.focusedYear};
  }
`;

const IconWrap = styled.div``;

const PaginateMonth = styled.button`
  cursor: pointer;
  flex: 0 0 90px;

  border: none;
  background: transparent;
  outline: none;

  ${({theme})=> theme.typography.filters.datepicker.monthLink.default};

  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background: transparent;
    ${({theme})=> css`
      background: ${theme.colors.menu.active};
      ${theme.typography.filters.datepicker.monthLink.hover}
    `};

    ${IconWrap}{
      [stroke]{
        stroke: ${({theme}) => theme.colors.pureBase};
      }
    }
  }

`;

const CalBody = styled.div`
  padding: 5px 0;
`;

const CalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  height: 40px;
  box-sizing: border-box;

  padding: 0 10px;
`;

const CalHRow = styled(CalRow)`
  border-bottom: ${({theme}) => theme.colors.divider} 1px solid;
`;

const CalCell = styled.div`

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  ${({theme})=> theme.typography.filters.datepicker.calendar.default};

  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}

`;

const CalHCell = styled(CalCell)`
  ${({theme})=> theme.typography.filters.datepicker.calendar.header};
`;

const CalCellB = styled(CalCell)<{ thisMonth?: boolean, isToday?: boolean, state?: CellStates }>`
  cursor: pointer;
  position: relative;

  ${({thisMonth}) => !thisMonth  && css`
    ${({theme})=> theme.typography.filters.datepicker.calendar.otherMonth};
  `}

  ${({isToday}) => isToday  && css`
    border: 2px solid ${({theme}) => theme.colors.menu.passive};
  `}

  ${({state, theme}) => (state === 'single' || state === 'start' || state === 'end') && css`
    background: ${theme.colors.menu.active};
    ${theme.typography.filters.datepicker.calendar.active};
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
    background: ${({theme}) => theme.colors.divider} !important;
  `}

  ${({state}) => (state === 'inside') && css`
    background: ${({theme}) => theme.colors.menu.passive};
    border-radius: 0;
    opacity: 1;

    &:nth-child(7n+1), &:nth-child(7n){
      &::after {
        background: ${({theme}) => theme.colors.menu.passive};
        display: block;
        content: '';
        position: absolute;
        left: -10px;
        width: 10px;
        top: 0;
        height: 40px;
      }
    }

    &:nth-child(7n)::after {
      left: auto;
      right: -10px;
    }
  `}

`;

const DayGuide : string[] = [
  "S", "M", "T", "W", "T", "F", "S"
];

interface IProps {
  initialDates?: Date | Date[]
  dateMode: DateMode
  timeMode: TimeMode
  updateCallback?: (range: Interval)=>{}
}

const DatePicker : React.FC<IProps> = (props) => {

  const {updateCallback} = props;


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
  });

  useEffect(()=>{
    setTimeRange(defaultTimeRange);
  }, [timeMode, setTimeRange, defaultTimeRange]);

  useEffect(()=>{
    setTimeMode(props.timeMode);
    setDateMode(props.dateMode);
  }, [props, setTimeMode, setDateMode]);

  useEffect(() => {
    updateCallback(selectedRange);
  }, [selectedRange, updateCallback]);

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
  }, [dateMode, targetedDate, selectedRange.start, timeRange.start, timeRange.end]);


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
      start[unit] = value;
    } else {
      end[unit] = value;
    }

    // === Enforce time limitations. ===
    // No minute above 24:00 for end time.
    end.minutes = (end.hours === 24 && end.minutes > 0) ? 0 : end.minutes;

    // Time interval should be at least one minute - if not, revert back.
    if(timeLaterOrSame(start, end)){
      if(target === 'start'){
        start[unit] = originalValue;
      } else {
        end[unit] = originalValue;
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

  }, [selectedRange.end, selectedRange.start, timeRange]);


  /**
   * Alias for callback use of updateTimeInDate for start of range.
   */
  const updateStartTime = useCallback((unit : 'hours'|'minutes', value : number) => {
    updateTimeInDate('start', unit, value);
  }, [updateTimeInDate]);

  /**
   * Alias for callback use of updateTimeInDate for end of range.
   */
  const updateEndTime = useCallback((unit : 'hours'|'minutes', value : number) => {
    updateTimeInDate('end', unit, value);
  }, [updateTimeInDate]);


  const updateStartDate = useCallback(() => {
    // Currently we do not allow updating the date by typing.
    // We can add this easily with date-fns later.
  }, []);

  const updateEndDate = useCallback(() => {
    // Currently we do not allow updating the date by typing.
    // We can add this easily with date-fns later.
  }, []);


  return (
    <Container>

      <DateTimeArea>
        <DateTimeBlock title='From' hasDate hasTime={timeMode != 'off'} date={selectedRange.start} time={timeRange.start} setTimeCallback={updateStartTime} setDateCallback={updateStartDate} />
        <DateTimeBlock title='To' hasDate={dateMode == 'interval'} hasTime={timeMode == 'interval'} date={selectedRange.end} time={timeRange.end} allowAfterMidnight setTimeCallback={updateEndTime} setDateCallback={updateEndDate} />

        <TimeZoneOption>
          <TimeZoneLabel>Timezone</TimeZoneLabel>
          <TimeZoneValue>JST</TimeZoneValue>
        </TimeZoneOption>

      </DateTimeArea>

      <CalendarArea>
        <CalendarHeader>

          <PaginateMonth onClick={() => setFocusedMonth( addMonths(focusedMonth, -1) )}>
            <IconWrap><Icon icon='Left' color='dimmed' size={10} /></IconWrap>
            {format(addMonths(focusedMonth, -1), "MMM")}
          </PaginateMonth>

          <CurrentMonth>
            <span>{format(focusedMonth, "yyyy")}</span>
            {format(focusedMonth, "MMMM")}
          </CurrentMonth>

          <PaginateMonth onClick={() => setFocusedMonth( addMonths(focusedMonth, 1) )}>
            {format(addMonths(focusedMonth, 1), "MMM")}
            <IconWrap><Icon icon='Right' color='dimmed' size={10} /></IconWrap>
          </PaginateMonth>

        </CalendarHeader>

        <CalHRow>
          {DayGuide.map((day, index) => {
            return <CalHCell key={index}>{day}</CalHCell>;
          })}
        </CalHRow>

        <CalBody>
          {weeksOfMonth.map((week, index)=>{
            const days = eachDayOfInterval({
              start: week,
              end: endOfWeek(week)
            });

            return (
              <CalRow key={index}>
                {days.map((day, index) => {
                  return <CalCellB key={index} onClick={() => onCellClick(day)} onMouseEnter={() => setHoverDay(day)} onMouseLeave={() => setHoverDay(null)} state={cellState(day, selectedRange)} thisMonth={isSameMonth(day, focusedMonth)} isToday={isToday(day)}>{format(day, "d")}</CalCellB>;
                })}
              </CalRow>
            );
          })}
        </CalBody>

      </CalendarArea>


    </Container>
  );

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
};

/**
 * Convert a single days duration to an interval.
 * @param day The day to convert to an interval
 */
const singleDayToInterval = (day: Date) : Interval => {
  return {
    start: startOfDay(day),
    end: endOfDay(day)
  };
};

/**
 * Check that the end time is later than the start.
 * @param startTime The start time.
 * @param endTime The end time.
 */
const timeLaterOrSame = (startTime : TimeProperties, endTime : TimeProperties ) : boolean => {

  const start = (startTime.hours * 3600) + (startTime.minutes * 60) + startTime.seconds;
  const end = (endTime.hours * 3600) + (endTime.minutes * 60) + endTime.seconds;

  return start >= end;
};


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
  };

  return processed;

};

export default DatePicker;