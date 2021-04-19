import React, {useRef, useCallback, ChangeEvent, InputHTMLAttributes} from 'react';
import styled from 'styled-components';
import Button from './Button';
import { TypeButtonSizes, TypeButtonDesigns } from '..';

const Container = styled.div``;
const HiddenInput = styled.input`
  display: none;
`;

interface OwnProps {
  text: string
  buttonSize?: TypeButtonSizes
  buttonDesign?: TypeButtonDesigns
  callback: (newFiles: FileList) => void 
}

type IFileInput = OwnProps & InputHTMLAttributes<HTMLInputElement>
const InputFileButton : React.FC<IFileInput> = ({text, buttonDesign, buttonSize, callback, ...props}) => {

  let fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async(e: ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.files && e.target.files.length > 0)) { return;}

    const newFiles : FileList = e.target.files;
      if(callback) {
        callback(newFiles);
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
        {...props}
      />
      <Button
        onClick={fowardClick}
        design={buttonDesign}
        size={buttonSize}
      >{text}
      </Button>
    </Container>
  );
};

export default InputFileButton;