import React from 'react';
import styled from "styled-components";

/**
 * -- Content Placeholder --
 * Intended as an aid for development and use in stories.
 */
const Arrow = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid var(--grey-10);
  border-left: 0;
  border-bottom: 0;
  border-radius: 0 3px 0 0;

  &.t { top: 24px; }
  &.b { bottom: 24px; }
  &.l { left: 24px; }
  &.r { right: 24px; }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  height: 100%;
  background: var(--grey-3);
  border: 12px solid var(--grey-6);
  box-sizing: border-box;
  flex: 1;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.2px;
  color: var(--grey-10);
`;

export const FlexContentPlaceholder : React.FC<{title?: string}> = ({ title = 'Placeholder' }) => {
  return(
    <Container>
      {title}
      <Arrow className='t l' style={{transform: 'rotate(-90deg)'}} />
      <Arrow className='t r' style={{transform: 'rotate(0deg)'}} />
      <Arrow className='b r' style={{transform: 'rotate(90deg)'}} />
      <Arrow className='b l' style={{transform: 'rotate(180deg)'}} />
    </Container>      
  );
};