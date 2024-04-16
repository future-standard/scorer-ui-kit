import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../Icons/Icon';
import DateTimeBlock from '../atoms/DateTimeBlock';

import { format, startOfMonth, endOfMonth, eachDayOfInterval, isAfter, eachWeekOfInterval, addMonths, endOfWeek, intervalToDuration, isSameMonth, isSameDay, isToday, startOfDay, endOfDay, isWithinInterval, set, add, isEqual } from 'date-fns';
import { ja, enUS } from 'date-fns/locale';

/**
 * Convert a single days duration to an interval.
 * @param day The day to convert to an interval
 */

const initializeInterval = (day: Date): DateInterval => {
  return {
    start: set(day, { seconds: 0, milliseconds: 0 }),
    end: endOfDay(day)
  };
};

const TODAY = new Date();
const TODAY_INTERVAL: DateInterval = initializeInterval(startOfDay(new Date()));

type CellStates = "off" | "single" | "start" | "end" | "inside" | "hover" | "insideHover";
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
  border-right: ${({ theme }) => theme.colors.divider} 1px solid;
  width: 170px;
  display: flex;
  flex-direction: column;
`;

const TimeZoneOption = styled.div`
  border-top: ${({ theme }) => theme.colors.divider} 1px solid;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

const TimeZoneLabel = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.filters.subOption.label};
  `}

`;
const TimeZoneValue = styled.div`
  ${({ theme }) => css`
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
  border-bottom: ${({ theme }) => theme.colors.divider} 1px solid;
  text-align: center;
`;

const CurrentMonth = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.typography.filters.datepicker.focusedMonth};
  span {
    display: block;
    flex: 0;
    ${({ theme }) => theme.typography.filters.datepicker.focusedYear};
  }
`;

const IconWrap = styled.div``;

const PaginateMonth = styled.button`
  cursor: pointer;
  flex: 0 0 90px;

  border: none;
  background: transparent;
  outline: none;

  ${({ theme }) => theme.typography.filters.datepicker.monthLink.default};

  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background: transparent;
    ${({ theme }) => css`
      background: ${theme.colors.menu.active};
      ${theme.typography.filters.datepicker.monthLink.hover}
    `};

    ${IconWrap}{
      [stroke]{
        stroke: ${({ theme }) => theme.colors.pureBase};
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
  border-bottom: ${({ theme }) => theme.colors.divider} 1px solid;
`;

const CalCell = styled.div`

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  ${({ theme }) => theme.typography.filters.datepicker.calendar.default};

  ${({ theme }) => css`
    font-family: ${theme.fontFamily.data};
  `}

`;

const CalHCell = styled(CalCell)`
  ${({ theme }) => theme.typography.filters.datepicker.calendar.header};
`;

const CalCellB = styled(CalCell) <{ thisMonth?: boolean, isToday?: boolean, state?: CellStates }>`
  cursor: pointer;
  position: relative;

  ${({ thisMonth }) => !thisMonth && css`
    ${({ theme }) => theme.typography.filters.datepicker.calendar.otherMonth};
  `}

  ${({ isToday }) => isToday && css`
    border: 2px solid ${({ theme }) => theme.colors.menu.passive};
  `}

  ${({ state, theme }) => (state === 'single' || state === 'start' || state === 'end') && css`
    background: ${theme.colors.menu.active};
    ${theme.typography.filters.datepicker.calendar.active};
  `}

  ${({ state }) => (state === 'start') && css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${({ state }) => (state === 'end') && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${({ state }) => (state === 'insideHover') && css`
    background: ${({ theme }) => theme.colors.divider} !important;
  `}

  ${({ state }) => (state === 'inside') && css`
    background: ${({ theme }) => theme.colors.menu.passive};
    border-radius: 0;
    opacity: 1;

    &:nth-child(7n+1), &:nth-child(7n){
      &::after {
        background: ${({ theme }) => theme.colors.menu.passive};
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

const enDayGuide: string[] = [
  "S", "M", "T", "W", "T", "F", "S"
];

const jpDayGuide: string[] = ['日', '月', '火', '水', '木', '金', '土'];

export const isDateInterval = (value: any): value is DateInterval => {
  if (value === null || value === undefined) {
    return false;
  }

  if (value.start === null || value.start === undefined) {
    return false;
  }

  if (value.end === null || value.end === undefined) {
    return false;
  }

  return (value.start instanceof Date) && (value.end instanceof Date);
};

export interface DateInterval {
  start: Date;
  end: Date;
}
export interface IDatePicker {
  initialValue?: Date | DateInterval
  dateMode?: DateMode
  timeMode?: TimeMode
  hasEmptyValue?: boolean
  dateTimeTextUpper?: string
  dateTimeTextLower?: string
  timeZoneTitle?: string
  timeZoneValueTitle?: string
  updateCallback?: (data: DateInterval | Date) => void
  lang?: 'en' | 'ja'
}

const DatePicker: React.FC<IDatePicker> = ({
  dateMode = 'interval',
  timeMode = 'interval',
  dateTimeTextUpper = 'From',
  dateTimeTextLower = 'To',
  timeZoneTitle = 'Timezone',
  timeZoneValueTitle = 'JST',
  hasEmptyValue = false,
  updateCallback = () => { },
  initialValue,
  lang = 'en'
}) => {

  // TODO: Have a function to output tidied up data for the configuration.

  const [selectedRange, setSelectedRange] = useState<DateInterval | null>(getInitialValue(hasEmptyValue, initialValue));
  const [focusedMonth, setFocusedMonth] = useState(selectedRange === null ? TODAY : selectedRange.start);
  const [targetedDate, setTargetedDate] = useState<'start' | 'end' | 'done'>('start');
  const [weeksOfMonth, setWeeksOfMonth] = useState<Date[]>([]);
  const isInitialMount = useRef(true);
  const [isTimeRangeValid, setIsTimeRangeValid] = useState<boolean>(true);
  const dayGuide = lang === 'ja' ? jpDayGuide : enDayGuide;

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const now = new Date();
      setSelectedRange(initializeInterval(startOfDay(now)));
      setFocusedMonth(now);
    }

  }, [dateMode, timeMode]);

  useEffect(() => {
    setWeeksOfMonth(eachWeekOfInterval({
      start: startOfMonth(focusedMonth),
      end: endOfMonth(focusedMonth)
    }));
  }, [focusedMonth]);

  useEffect(() => {
    if (selectedRange !== null) {
      updateCallback((dateMode === 'interval' || timeMode === 'interval') ? selectedRange : selectedRange.start);
    }
  }, [dateMode, selectedRange, timeMode, updateCallback]);

  /**
   * Handler for updating picked dates when a calendar day has been selected.
   * @param day The day of the cell that has been clicked / actioned.
   */
  const onCellClick = useCallback((day: Date) => {

    // The first click will initialize the range when empty is valid
    const validRange = selectedRange ? selectedRange : TODAY_INTERVAL;

    if (dateMode === 'single') {

      // === Single Mode ===
      const start = updateDay(validRange.start, day);
      const end = updateDay(validRange.end, day);
      setSelectedRange({
        start,
        end
      });
    } else {

      // === Interval Mode ===
      // Setting the interval end (assuming it's later than the start).
      if (targetedDate === 'end' && isAfter(day, validRange.start)) {
        const end = updateDay(validRange.end, day);
        setSelectedRange({
          ...validRange,
          end
        });

        setTargetedDate('done');

        // For first interaction || setting the end date correctly || if completed and restarting.
      } else if (targetedDate === 'start' || targetedDate === 'end' || targetedDate === 'done') {

        const start = updateDay(validRange.start, day);
        const end = updateDay(validRange.end, day);
        setSelectedRange({
          start,
          end
        });
        setTargetedDate('end');

      }
    }
  }, [dateMode, selectedRange, targetedDate]);

  useEffect(() => {
    const { start, end } = selectedRange ? selectedRange : TODAY_INTERVAL;

    if((timeMode ==='interval' && isAfter(add(start, { minutes: 1 }), end))){
      if(isEqual(end, endOfDay(start)) && end.getSeconds() > 0) { // Midnight exception
        setIsTimeRangeValid(true);
      }else {
        setIsTimeRangeValid(false);
      }

    } else {
      setIsTimeRangeValid(true);
    }

  },[selectedRange, timeMode]);

  const updateStartDate = useCallback((start: Date) => {
    const { end } = selectedRange ? selectedRange : TODAY_INTERVAL;

    setSelectedRange({ start, end });
  }, [selectedRange]);

  const updateEndDate = useCallback((end: Date) => {
    const { start } = selectedRange ? selectedRange : TODAY_INTERVAL;

    setSelectedRange({ start, end });
  }, [selectedRange]);

  return (
    <Container>

      <DateTimeArea>
        <DateTimeBlock {...{isTimeRangeValid}} title={dateTimeTextUpper} hasDate hasTime={timeMode !== 'off'} date={selectedRange ? selectedRange.start : TODAY_INTERVAL.start} setDateCallback={updateStartDate} />
        <DateTimeBlock {...{isTimeRangeValid}} title={dateTimeTextLower} hasDate={dateMode === 'interval'} hasTime={timeMode === 'interval'} date={selectedRange ? selectedRange.end : TODAY_INTERVAL.end} allowAfterMidnight setDateCallback={updateEndDate} />

        <TimeZoneOption>
          <TimeZoneLabel>{timeZoneTitle}</TimeZoneLabel>
          <TimeZoneValue>{timeZoneValueTitle}</TimeZoneValue>
        </TimeZoneOption>

      </DateTimeArea>

      <CalendarArea>
        <CalendarHeader>

          <PaginateMonth type='button' onClick={() => setFocusedMonth(addMonths(focusedMonth, -1))}>
            <IconWrap><Icon icon='Left' color='dimmed' size={10} /></IconWrap>
            {format(addMonths(focusedMonth, -1), "MMM", { locale: lang === 'ja' ? ja : enUS })}
          </PaginateMonth>

          <CurrentMonth>
            <span>{format(focusedMonth, "yyyy")}</span>
            {format(focusedMonth, "MMMM", { locale: lang === 'ja' ? ja : enUS })}
          </CurrentMonth>

          <PaginateMonth type='button' onClick={() => setFocusedMonth(addMonths(focusedMonth, 1))}>
            {format(addMonths(focusedMonth, 1), "MMM", { locale: lang === 'ja' ? ja : enUS })}
            <IconWrap><Icon icon='Right' color='dimmed' size={10} /></IconWrap>
          </PaginateMonth>

        </CalendarHeader>

        <CalHRow>
          {dayGuide.map((day, index) => {
            return <CalHCell key={index}>{day}</CalHCell>;
          })}
        </CalHRow>

        <CalBody>
          {weeksOfMonth.map((week, index) => {
            const days = eachDayOfInterval({
              start: week,
              end: endOfWeek(week)
            });

            return (
              <CalRow key={index}>
                {days.map((day, index) => {
                  return <CalCellB key={index} onClick={() => onCellClick(day)} state={cellState(day, selectedRange)} thisMonth={isSameMonth(day, focusedMonth)} isToday={isToday(day)}>{format(day, "d")}</CalCellB>;
                })}
              </CalRow>
            );
          })}
        </CalBody>

      </CalendarArea>


    </Container>
  );

};

export default DatePicker;

/**
 * Used to work out the state of the calendar cell in regards to selection or position in
 * the date range.
 * @param day Date - The date of the cell in the calendar.
 * @param interval Interval - The date range that is active in the calendar.
 */
const cellState = (day: Date, interval: Interval | null, _hoverDate?: Date): CellStates => {

  let state: CellStates = "off";
  let isInsideInterval = false;

  if (interval === null) {
    return state;
  }

  const singleDayRange: boolean = intervalToDuration(interval).days === 0;

  try {
    isInsideInterval = isWithinInterval(day, interval);
  } catch (error) {
    isInsideInterval = false;
  }

  if (isInsideInterval || isSameDay(interval.start, day)) {

    if (singleDayRange) {
      state = "single";
    } else if (isSameDay(interval.start, day)) {
      state = "start";
    } else if (isSameDay(interval.end, day)) {
      state = "end";
    } else {
      state = "inside";
    }
  }

  return state;
};

const updateDay = (date: Date, target: Date) => {

  const newDate = set(target, {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds(),
  });

  return newDate;
};

const getInitialValue = (hasEmptyValue: boolean, initialValue?: Date | DateInterval): DateInterval | null => {
  if (hasEmptyValue && initialValue === undefined) {
    return null;
  }

  const validInitial = initialValue ? initialValue : initializeInterval(startOfDay(new Date()));

  return (validInitial instanceof Date) ? initializeInterval(validInitial) : validInitial;
};