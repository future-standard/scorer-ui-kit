import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../Icons/Icon';
import DateTimeBlock from '../atoms/DateTimeBlock';

import { format, startOfMonth, endOfMonth, eachDayOfInterval, isAfter, eachWeekOfInterval, addMonths, endOfWeek, intervalToDuration, isSameMonth, isSameDay, isToday, startOfDay, endOfDay, isWithinInterval, set, add, isEqual } from 'date-fns';
import { ja, enUS } from 'date-fns/locale';
import { resetButtonStyles } from '../../common';
import Button from '../../Form/atoms/Button';
import { IDateInterval, IDateRange } from '..';

/**
 * Convert a single days duration to an interval.
 * @param day The day to convert to an interval
 */

const initializeInterval = (day: Date): IDateInterval => {
  return {
    start: set(day, { seconds: 0, milliseconds: 0 }),
    end: endOfDay(day)
  };
};

const TODAY = new Date();
const TODAY_INTERVAL: IDateInterval = initializeInterval(startOfDay(new Date()));

type CellStates = "off" | "single" | "start" | "end" | "inside" | "hover" | "insideHover";
type DateMode = "single" | "interval";
type TimeMode = "off" | "single" | "interval";

// interface TimeProperties {
//   hours: number
//   minutes: number
//   seconds: number
//   milliseconds: number
// }

// interface TimeRange {
//   start: TimeProperties
//   end: TimeProperties
// }

const Container = styled.div`
  display: flex;
`;

const DateTimeArea = styled.div`
  border-right: var(--grey-6) 1px solid;
  width: 170px;
  display: flex;
  flex-direction: column;
`;

const TimeZoneOption = styled.div`
  border-top: var(--grey-6) 1px solid;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  box-sizing: border-box;
`;

const TimeZoneLabel = styled.div`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`;
const TimeZoneValue = styled.div`
  font-family: var(--font-data);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`;

const CalendarArea = styled.div`
  user-select: none;
`;

const CalendarHeader = styled.div`
  display: flex;
  height: 70px;
  border-bottom: var(--grey-6) 1px solid;
  text-align: center;
`;

const CurrentMonth = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: var(--primary-10);

  span {
    display: block;
    flex: 0;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.33px;
  }
`;

const IconWrap = styled.div`
  [stroke]{
    stroke: var(--grey-8);
  }
`;

const PaginateMonth = styled.button`
  cursor: pointer;
  flex: 0 0 72px;
  border: none;
  background: transparent;
  outline: none;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: color var(--speed-fast) var(--easing-primary-in-out);

  ${IconWrap}{
    svg * {
      transition: stroke var(--speed-fast) var(--easing-primary-in-out);
    }
  }

  &:hover:enabled  {
    color: var(--grey-12);

    ${IconWrap}{
      [stroke]{
        stroke: var(--grey-12);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

`;

const CalBody = styled.div`
  padding: 5px 0;
`;

const CalButtons = styled.div`
  display: flex;
  padding: 4px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-top: 1px solid var(--grey-6);
`;

const CalRightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  height: 40px;
  box-sizing: border-box;

  padding: 0 10px;
`;

const CalHRow = styled(CalRow)`
  border-bottom: var(--grey-6) 1px solid;
`;

const CalCell = styled.button`
  ${resetButtonStyles};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: var(--grey-12);
  font-family: var(--font-data);
`;

const CalHCell = styled(CalCell)`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--grey-a11);
`;

const ContentDot = styled.div<{ hasContent: boolean, state?: CellStates, isToday?: boolean, }>`
  position: absolute;
  left: 18px;
  bottom: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--primary-11);

  ${({ state }) => (state === 'single' || state === 'start' || state === 'end') && css`
    background-color: var(--white-12);`
  }

  ${({ state }) => (state === 'inside') && css`
    background-color: var(--primary-12);`
  }

  ${({ isToday }) => isToday && css`
    left: 16px;
    bottom: 3px;
  `}

  ${({ hasContent }) => !hasContent && css`
    display: none;
  `}
`;

const DayText = styled.span`
  transform: translateY(-1px);
`;

const CalCellB = styled(CalCell) <{ thisMonth?: boolean, isToday?: boolean, state?: CellStates }>`
  cursor: pointer;
  position: relative;
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  ${({ thisMonth }) => !thisMonth && css`
    color: var(--grey-a8);
  `}

  ${({ isToday }) => isToday && css`
    border: 2px solid var(--primary-a7);
  `}

  ${({ state }) => (state !== 'single' && state !== 'start' && state !== 'end') && css`
    &:hover:enabled {
      background: var(--primary-a6);
      color: var(--white-1);
    }
  `};

  ${({ state }) => (state === 'single' || state === 'start' || state === 'end') && css`
    background: var(--primary-9);
    color: var(--white-1);
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
    background: var(--primary-a9) !important;
    color: var(--white-1);
  `}

  ${({ state }) => (state === 'inside') && css`
    background: var(--primary-a5);
    border-radius: 0;
    opacity: 1;

    &:nth-child(7n+1), &:nth-child(7n){
      &::after {
        background: var(--primary-a5);
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

  &:disabled {
    color: var(--grey-6);
    cursor: not-allowed;

    ${({ state }) => (state === 'single' || state === 'start' || state === 'end') && css`
      color: var(--white-1);
      background: var(--red-a9);
    `}

    ${({ state }) => (state === 'inside') && css`
      color: var(--white-1);
      background: var(--red-a7);
      &:nth-child(7n+1), &:nth-child(7n){
        &::after {
          background: var(--red-a7);
        }
      }
    `};
  }

`;

const enDayGuide: string[] = [
  "S", "M", "T", "W", "T", "F", "S"
];

const jpDayGuide: string[] = ['日', '月', '火', '水', '木', '金', '土'];




export interface IDatePicker {
  initialValue?: Date | IDateInterval
  dateMode?: DateMode
  timeMode?: TimeMode
  hasEmptyValue?: boolean
  dateTimeTextUpper?: string
  dateTimeTextLower?: string
  timeZoneTitle?: string
  timeZoneValueTitle?: string
  availableRange?: IDateRange
  contentDays?: Date[]
  lang?: 'en' | 'ja'
  cancelText?: string
  applyText?: string
  hasApply?: boolean
  disableApply?: boolean
  updateCallback?: (data: IDateInterval | Date) => void
  applyCallback?: () => void
  cancelCallback?: () => void
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
  availableRange,
  contentDays,
  lang = 'en',
  cancelText = 'Cancel',
  applyText = 'Apply',
  hasApply = false,
  disableApply = false,
  applyCallback = () => { },
  cancelCallback = () => { }
}) => {

  // TODO: Have a function to output tidied up data for the configuration.

  const [selectedRange, setSelectedRange] = useState<IDateInterval | null>(getInitialValue(hasEmptyValue, initialValue));
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

    if ((timeMode === 'interval' && isAfter(add(start, { minutes: 1 }), end))) {
      if (isEqual(end, endOfDay(start)) && end.getSeconds() > 0) { // Midnight exception
        setIsTimeRangeValid(true);
      } else {
        setIsTimeRangeValid(false);
      }

    } else {
      setIsTimeRangeValid(true);
    }

  }, [selectedRange, timeMode]);

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
        <DateTimeBlock {...{ isTimeRangeValid }} title={dateTimeTextUpper} hasDate hasTime={timeMode !== 'off'} date={selectedRange ? selectedRange.start : TODAY_INTERVAL.start} setDateCallback={updateStartDate} />
        <DateTimeBlock {...{ isTimeRangeValid }} title={dateTimeTextLower} hasDate={dateMode === 'interval'} hasTime={timeMode === 'interval'} date={selectedRange ? selectedRange.end : TODAY_INTERVAL.end} allowAfterMidnight setDateCallback={updateEndDate} />

        <TimeZoneOption>
          <TimeZoneLabel>{timeZoneTitle}</TimeZoneLabel>
          <TimeZoneValue>{timeZoneValueTitle}</TimeZoneValue>
        </TimeZoneOption>

      </DateTimeArea>

      <CalendarArea>
        <CalendarHeader>

          <PaginateMonth type='button' disabled={isPrevMonthOutOfRange(focusedMonth, availableRange)} onClick={() => setFocusedMonth(addMonths(focusedMonth, -1))}>
            <IconWrap><Icon icon='Left' color='dimmed' size={10} /></IconWrap>
            {format(addMonths(focusedMonth, -1), "MMM", { locale: lang === 'ja' ? ja : enUS })}
          </PaginateMonth>

          <CurrentMonth>
            <span>{format(focusedMonth, "yyyy")}</span>
            {format(focusedMonth, "MMMM", { locale: lang === 'ja' ? ja : enUS })}
          </CurrentMonth>

          <PaginateMonth type='button' disabled={isNextMonthOutOfRange(focusedMonth, availableRange)} onClick={() => setFocusedMonth(addMonths(focusedMonth, 1))}>
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
                  const dayState = cellState(day, selectedRange);
                  const isTodayValue = isToday(day);

                  return (
                    <CalCellB
                      key={index}
                      disabled={isDayOutOfRange(day, availableRange)}
                      onClick={() => onCellClick(day)}
                      state={dayState}
                      thisMonth={isSameMonth(day, focusedMonth)}
                      isToday={isTodayValue}>
                      <DayText>
                        {format(day, "d")}
                      </DayText>
                      <ContentDot hasContent={dayHasContent(day, contentDays)} state={dayState} isToday={isTodayValue} />
                    </CalCellB>
                  );
                })}
              </CalRow>
            );
          })}
        </CalBody>

        {hasApply && (
          <CalButtons>
            {hasApply && (
              <CalRightButtons>
                <Button design='secondary' onClick={cancelCallback}>{cancelText}</Button>
                <Button onClick={applyCallback} disabled={!isTimeRangeValid || selectedRange === null || disableApply }>{applyText}</Button>
              </CalRightButtons>)
            }
          </CalButtons>)
        }

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

const getInitialValue = (hasEmptyValue: boolean, initialValue?: Date | IDateInterval): IDateInterval | null => {
  if (hasEmptyValue && initialValue === undefined) {
    return null;
  }

  const validInitial = initialValue ? initialValue : initializeInterval(startOfDay(new Date()));

  return (validInitial instanceof Date) ? initializeInterval(validInitial) : validInitial;
};

const isPrevMonthOutOfRange = (focusedMonth: Date, availableRange?: IDateRange): boolean => {
  if (!availableRange?.start) return false;

  try {
    const startYear = availableRange.start.getFullYear();
    const startMonth = availableRange.start.getMonth();

    if (focusedMonth.getFullYear() < startYear ||
      (focusedMonth.getFullYear() === startYear && focusedMonth.getMonth() <= startMonth)) {
      return true;
    }
  } catch (error) {
    console.warn('Invalid available range:', availableRange, error);
  }

  return false;
};

const isNextMonthOutOfRange = (focusedMonth: Date, availableRange?: IDateRange): boolean => {
  if (!availableRange?.end) return false;

  try {
    const endYear = availableRange.end.getFullYear();
    const endMonth = availableRange.end.getMonth();

    if (focusedMonth.getFullYear() > endYear ||
      (focusedMonth.getFullYear() === endYear && focusedMonth.getMonth() >= endMonth)) {
      return true;
    }
  } catch (error) {
    console.warn('Invalid available range:', availableRange, error);
  }

  return false;
};


const isDayOutOfRange = (currentDay: Date, availableRange?: IDateRange): boolean => {
  if (!availableRange) return false;

  const { start, end } = availableRange;

  try {
    if (start && currentDay < start && !isSameDay(currentDay, start)) {
      return true;
    }

    if (end && currentDay > end && !isSameDay(currentDay, end)) {
      return true;
    }
  } catch (error) {
    console.warn('Invalid available range:', availableRange, error);
  }

  return false;
};

const dayHasContent = (currentDay: Date, contentDays?: Date[]): boolean => {
  if (!contentDays) return false;

  return contentDays.some(day => isSameDay(currentDay, day));
};