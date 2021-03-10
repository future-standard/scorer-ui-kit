import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import styled from 'styled-components';
import SmallInput from '../../Form/atoms/SmallInput';
import Button from '../../Form/atoms/Button';
import {StyledLabel} from '../../Form/atoms/Label';

const Container = styled.div`
  position: relative;
`;
const StyledButton = styled(Button)``;

const EditContainer = styled.div`
  min-width: 320px;
  z-index: 99;
  position: absolute;
  bottom: -15px;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${StyledLabel} {
    margin:0;
    span {
      margin: 0;
    }
  }
  ${StyledButton} {
    margin-left: 5px;
  }
`;

const TextContainer = styled.div`
  cursor: pointer;
`;

export interface OwnProps {
  defaultValue: string
  rowKey: string
  loading?: boolean
  saveCallback?: (inputValue: string, rowKey: string) => void
}

type IEditableCell = OwnProps & InputHTMLAttributes<HTMLInputElement>

const EditCell : React.FC<IEditableCell> = ({
  type = 'text',
  placeholder = '',
  defaultValue,
  rowKey,
  loading = false,
  saveCallback,
  ...props
}) => {
  const [isEditMode, setIsEditMode] = useState(Boolean);
  const [updatedValue, setUpdatedValue] = useState(defaultValue);

  const handleSave = useCallback((value: string) => {
    console.log(`saving.. ${value}`);
    if(saveCallback) {
      saveCallback(value, rowKey);
    }
    setIsEditMode(false);
  },[]);

  const verifyKeyPress = useCallback( (eve: React.KeyboardEvent<HTMLInputElement>) => {
  
    // var code = parseInt(eve.key, 10);
    const code = eve.keyCode | eve.which | parseInt(eve.key, 10);

    if(code === 13 && handleSave) {
      handleSave(updatedValue);
      setIsEditMode(false);
    }

    if(code === 27) {
      setUpdatedValue(defaultValue);
      setIsEditMode(false);
    }

  },[updatedValue, handleSave, isEditMode]);
  
  return(
    <Container> 
      {isEditMode
      ? <EditContainer>
          <SmallInput
            autoFocus
            label=''
            disabled={loading}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onKeyUp={(eve: React.KeyboardEvent<HTMLInputElement>) => verifyKeyPress(eve)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setUpdatedValue(e.target.value);}} 
            {...props}
          />
          <StyledButton
            onClick = {() => {
              handleSave(updatedValue);
            }}
            size="small"
          >
            {loading ? 'Saving' : 'Save'}
          </StyledButton>
          {!loading && <StyledButton 
            onClick={() => setIsEditMode(false)}
            design='secondary'
            size="small"
            >Cancel</StyledButton>}
        </EditContainer>
      : <TextContainer onClick={() => setIsEditMode(true)}>
          {updatedValue}
        </TextContainer>
      }
    </Container>
  );
}

export default EditCell;