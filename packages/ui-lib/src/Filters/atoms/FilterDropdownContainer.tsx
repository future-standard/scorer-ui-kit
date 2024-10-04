import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ height?: string }>`
  box-shadow: 0px 5px 25px 0px var(--filter-button-shadow-color);
  background-color: var(--grey-a2);
  backdrop-filter: blur(20px);
  border: var(--grey-6) 1px solid;
  border-radius: 3px;
  position: relative;
  display: inline-flex;
  overflow: visible;
  padding-top: 5px;

  &::before {
    content: '';
    background-color: var(--primary-a9);
    border-radius: 3px 3px 0 0;
    box-shadow: 0px 5px 25px 0px var(--primary-a5);

    display: block;
    height: 5px;
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    z-index: 1;
  }

`;

const Inner = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

interface IProps {
  height?: string
}

type Props = IProps & HTMLAttributes<HTMLDivElement>

const FilterDropdownContainer : React.FC<Props> = ({children,...props}) => {
  return (
    <Container {...props}>
      <Inner>
        {children}
      </Inner>
    </Container>
  );
};

export default FilterDropdownContainer;