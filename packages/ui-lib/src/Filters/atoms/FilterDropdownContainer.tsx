import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ height?: string }>`

  ${({theme}) => theme.styles.filters.dropdownContainer.background};

  border-radius: 3px;
  position: relative;
  display: inline-flex;
  overflow: hidden;
  padding-top: 5px;

  &::before {
    ${({theme}) => theme.styles.filters.dropdownContainer.topBorder};
    content: '';

    display: block;
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