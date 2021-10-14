import React, { useState, useCallback} from 'react';
import styled from 'styled-components';

const Container = styled.div<{height?: string}>`
  ${({height}) => height ? `height: ${height}` : null};
  position: relative;
`;

const DragAndDrop = styled.div<{inDropZone: boolean}>`
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

interface IDropArea {
  height?: string
  text?: string
  dropCallback?: (newFiles: FileList) => void
}

const DropArea : React.FC<IDropArea> = ({height, text, dropCallback, ...props}) => {
  const [inDropZone, setInDropZone] = useState(false);

const onDragEnter = useCallback((e) => {
  e.preventDefault();
  e.stopPropagation();

  setInDropZone(true);
},[]);

const onDragLeave = useCallback((e) => {
  e.preventDefault();
  e.stopPropagation();

  setInDropZone(false);
},[]);

const onDragOver = useCallback((e) => {
  e.preventDefault();
  e.stopPropagation();

},[]);

const onDrop = useCallback((e ) => {
  e.preventDefault();
  e.stopPropagation();
  if(e.dataTransfer?.files && dropCallback) {
    dropCallback(e.dataTransfer.files);
  }
  setInDropZone(false);
},[dropCallback]);

  return(
    <Container {...{height}} {...props}>
      <DragAndDrop
        {...{
          inDropZone,
          onDragEnter,
          onDragLeave,
          onDrop,
          onDragOver
        }}
      >
        {text}
      </DragAndDrop>
    </Container>
  );
};

export default DropArea;