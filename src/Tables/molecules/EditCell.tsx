import React, { InputHTMLAttributes, useState, useCallback, useRef } from 'react';
import styled, {css} from 'styled-components';
import SmallInput from '../../Form/atoms/SmallInput';
import Button from '../../Form/atoms/Button';
import ButtonWithLoading from '../../Form/atoms/ButtonWithLoading';
import {StyledLabel} from '../../Form/atoms/Label';
import IconButton from '../../Form/atoms/IconButton';
import { useClickOutside } from '../../hooks/useClickOutside';

const Container = styled.div`
  position: relative;
`;
const StyledButton = styled(Button)``;

const StyledLoadingButton = styled(ButtonWithLoading)``;

const EditContainer = styled.div`
  min-width: 320px;
  background-color: hsl(0, 0%, 100%);
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
  ${StyledLoadingButton} {
    margin-left: 5px;
  }
`;

const StyledIconButton = styled(IconButton)``;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 16px;
  align-items: center;

  ${StyledIconButton} {
    opacity: 0;
  };

  &:hover {
    ${StyledIconButton} {
      opacity: 1;
    };
  }
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

  const editContainerRef = useRef<HTMLDivElement>(null);

  const onClickOutsideEdit = () => {
    setUpdatedValue(defaultValue);
    setIsEditMode(false);
  };

  useClickOutside(editContainerRef, onClickOutsideEdit);
  
  return(
    <Container> 
      {isEditMode
      ? <EditContainer
          ref={editContainerRef}
        >
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
          <StyledLoadingButton
            onClick = {() => {
              handleSave(updatedValue);
            }}
            size="small"
            loading={loading}
          >
            {loading ? 'Saving' : 'Save'}
          </StyledLoadingButton>
          {!loading && <StyledButton 
            onClick={() => setIsEditMode(false)}
            design='secondary'
            size="small"
            >Cancel</StyledButton>}
        </EditContainer>
      : <TextContainer>
          {updatedValue}
          <StyledIconButton icon='Edit' size={16} onClick={() => setIsEditMode(true)} />
        </TextContainer>
      }
    </Container>
  );
}

export default EditCell;