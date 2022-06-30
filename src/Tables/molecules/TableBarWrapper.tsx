import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

export interface IBarElement {
  id: string
  barElement: ReactElement
}

export interface ITableBarWrapper {
  barElements: IBarElement[]
  visibleElement: string
}

const TableBarWrapper: React.FC<ITableBarWrapper> = ({barElements, visibleElement}) => {

  const renderedElement = barElements.find(({id}) => visibleElement === id);

  if(!renderedElement) {
    return null;
  }
  console.log('I reach here before breaking', barElements);
  return(
    <Container>
      {renderedElement.barElement}
    </Container>
  );
};

export default TableBarWrapper;