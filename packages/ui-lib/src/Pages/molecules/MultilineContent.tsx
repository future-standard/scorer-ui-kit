import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * This component creates a column of ReactElements
 */
export interface IMultiContent {
  contentArray: ReactElement[];
}

const MultilineContent : React.FC<IMultiContent> = ({contentArray}) => {
  return(
    <Container>
      {contentArray.map((element, index) => {
        return <div key={`element-${index}`}>{element}</div>;
      })}
    </Container>
  );
};

export default MultilineContent;