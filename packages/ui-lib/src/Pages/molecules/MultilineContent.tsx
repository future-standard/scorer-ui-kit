import type React from 'react';
import type { ReactElement } from 'react';
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

const MultilineContent: React.FC<IMultiContent> = ({ contentArray }) => {
  return (
    <Container>
      {contentArray.map((element, index) => {
        // biome-ignore lint/suspicious/noArrayIndexKey: contentArray entries are arbitrary ReactNodes (string | JSX | etc) with no stable identity. #646.
        return <div key={`element-${index}`}>{element}</div>;
      })}
    </Container>
  );
};

export default MultilineContent;
