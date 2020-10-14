import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ height?: string }>`

  ${({height}) => height ? height : '320px'};

  background: #fff;
  border-radius: 3px;
  box-shadow: 0 5px 25px 0 rgba(39, 118, 197, 0.12);
  position: relative;
  display: inline-flex;
  overflow: hidden;
  padding-top: 5px;

  &::before {
    content: '';
    display: block;
    background: #70c3ff;
    height: 5px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }

`;

const Inner = styled.div`
  display: inline-flex;
  flex-direction: row;
`

interface IProps {
  height?: string
}

const FilterDropdownContainer : React.FC<IProps> = ({height, children}) => {
  return <Container {...height}>
    <Inner>
      { children }
    </Inner>
  </Container>;
};

export default FilterDropdownContainer;