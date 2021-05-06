import React, { useState, useCallback} from 'react';
import styled from 'styled-components';

const Container = styled.div<{height?: string}>`
  ${({height}) => height ? `height: ${height}` : null};
  position: relative;
`;

const DradAndDrop = styled.div<{inDropZone: boolean}>`
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({inDropZone}) => inDropZone ? `dashed #afa9a9 2px` : null};
`;

interface OwnProps {
  height?: string
  text?: string
  dropCallback?: (newFiles: FileList) => void 
}

type IDropArea = OwnProps

const DropArea : React.FC<IDropArea> = ({height, text, dropCallback}) => {
  const [inDropZone, setInDropZone] = useState(false);

const handleDragEnter = useCallback((e) => {
  e.preventDefault();
  e.stopPropagation();

  setInDropZone(true);
},[]);

const handleDragLeave = useCallback((e) => {
  e.preventDefault();
  e.stopPropagation();

  setInDropZone(false);
},[]);

const handleDragOver = useCallback((e) => {
  e.preventDefault();
  e.stopPropagation();

},[]);

const handleDrop = useCallback((e ) => {
  e.preventDefault();
  e.stopPropagation();
  if(e.dataTransfer?.files && dropCallback) {
    dropCallback(e.dataTransfer.files);
  }
  setInDropZone(false);
},[dropCallback]);

  return(
    <Container height={height}>
      <DradAndDrop
        inDropZone={inDropZone}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {text}
      </DradAndDrop>
    </Container>
  );
};

export default DropArea;