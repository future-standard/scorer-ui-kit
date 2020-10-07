import React, { useState } from 'react';
import styled from 'styled-components';

import {format, startOfMonth, endOfMonth, eachDayOfInterval, eachWeekOfInterval, addMonths, endOfWeek, isSameMonth } from 'date-fns'


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
  let [focusedMonth, setFocusedMonth] = useState(new Date());

  const x = eachWeekOfInterval({
    start: startOfMonth(focusedMonth),
    end: endOfMonth(focusedMonth)
  })

  return <Container>

    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, -1) ) }>Prev</button>
    <h3>{format(focusedMonth, "yyyy/MM")}</h3>
    <button onClick={ () => setFocusedMonth( addMonths(focusedMonth, 1) ) }>Next</button>
    <button onClick={ () => setFocusedMonth( new Date() ) }>This Month</button>

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
          if(!isSameMonth(day, focusedMonth)){
            return <CalCell><Fade>{format(day, "d")}</Fade></CalCell>
          } else {
            return <CalCell>{format(day, "d")}</CalCell>
          }
        })}
      </CalRow>

    }) }

  </Container>;

};


export default DatePicker;