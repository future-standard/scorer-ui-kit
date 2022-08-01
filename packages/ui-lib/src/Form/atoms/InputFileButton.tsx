import React, {useRef, useCallback, ChangeEvent, InputHTMLAttributes} from 'react';
import styled from 'styled-components';
import Button from './Button';
import { TypeButtonSizes, TypeButtonDesigns } from '..';

const Container = styled.div``;
const HiddenInput = styled.input`
  display: none;
`;
const StyledButton = styled(Button)`
  text-align: center;
`;

interface OwnProps {
  text: string
  buttonSize?: TypeButtonSizes
  buttonDesign?: TypeButtonDesigns
  inputCallback: (newFiles: FileList) => void 
}

type IFileInput = OwnProps & InputHTMLAttributes<HTMLInputElement>
const InputFileButton : React.FC<IFileInput> = ({text, buttonDesign, buttonSize, inputCallback, ...props}) => {

  let fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async(e: ChangeEvent<HTMLInputElement>) => {
    if (!(e.target.files && e.target.files.length > 0)) { return;}
    const newFiles : FileList = e.target.files;
      if(inputCallback) {
        inputCallback(newFiles);
      }
      e.target.value = '';
  },[inputCallback]);

  const forwardClick = useCallback(() => {
    if(fileInputRef.current) {
      fileInputRef.current.click();
    }
  },[]);

  return(
    <Container>
      <HiddenInput 
        {...props}
        ref={fileInputRef}
        type='file'
        onChange={handleFile}
      />
      <StyledButton
        onClick={forwardClick}
        design={buttonDesign}
        size={buttonSize}
      >{text}
      </StyledButton>
    </Container>
  );
};

export default InputFileButton;