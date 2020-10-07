import React from 'react';
import styled from 'styled-components';

import {format, startOfMonth, endOfMonth, eachDayOfInterval, eachWeekOfInterval, startOfWeek, endOfWeek, getDay, isSameMonth } from 'date-fns'


// Start of month.
// End of month.
// Each week of month.

// Start minus one day, week.
// End plus one day, week.

// Put data together with next month / prev month flag.
//





const Container = styled.div`
  width: 40px;
  height: 40px;
`;

const CalRow = styled.div`
  display: flex;

`

const CalCell = styled.div`
  flex: 0 0 40px;
  padding: 10px;
`

const Fade = styled.span`
  opacity: 0.5;
`

interface IProps {

}

const DayGuide : string[] = [
  "S", "M", "T", "W", "T", "F", "S"
  // "Sunday",
  // "Monday",
  // "Tuesday",
  // "Wednesday",
  // "Thursday",
  // "Friday",
  // "Saturday"
]

const DatePicker : React.FC<IProps> = () => {

  // useState later on.
  let activeDate = new Date();

  console.log( DayGuide[ startOfWeek(activeDate).getDay() ] )
  console.log(eachDayOfInterval(
    { start: startOfMonth(activeDate), end: endOfMonth(activeDate) }
  ));

  const x = eachWeekOfInterval({
    start: startOfMonth(activeDate),
    end: endOfMonth(activeDate)
  })

  // console.log(x, x[0])
  // console.log(endOfWeek(x[0]))

  // x.forEach((week)=>{

  //   eachDayOfInterval({
  //     start: week,
  //     end: endOfWeek(week)
  //   }).forEach((day) => {
  //     return day;
  //   })

  // })

  return <Container>
    <CalRow>
      {DayGuide.map((day) => {
        return <CalCell>{day}</CalCell>;
      })}
    </CalRow>

    { x.map((week)=>{
      console.log(week)
      const days = eachDayOfInterval({
        start: week,
        end: endOfWeek(week)
      })

      return <CalRow>
        { days.map((day) => {
          return <CalCell>{format(day, "d")}</CalCell>
        })}
      </CalRow>

    }) }

  </Container>;

};


export default DatePicker;