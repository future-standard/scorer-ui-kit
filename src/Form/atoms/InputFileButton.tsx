import React, {useRef, useCallback} from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div``;
const HiddenInput = styled.input`
  display: none;
`;

interface IFileInput {
  text: string
  callback: (newFile: File) => void 
}

const InputFileButton : React.FC<IFileInput> = ({callback}) => {

  let fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async(e) => {
    if (!(e.target.files && e.target.files.length > 0)) { return;}

    const newFile : File = e.target.files[0];
      if(callback) {
        callback(newFile);
      }
  },[callback]);

  const fowardClick = useCallback(() => {
    if(fileInputRef.current) {
      fileInputRef.current.click();
    }
  },[]);

  return(
    <Container>
      <HiddenInput 
        ref={fileInputRef}
        type='file'
        onChange={handleFile}
        multiple={false}
        accept='image/*'
      />
      <Button
        onClick={fowardClick}
      >Select File
      </Button>
    </Container>
  );
};

export default InputFileButton;