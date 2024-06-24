import React, { InputHTMLAttributes, useState, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import SmallInput from '../../Form/atoms/SmallInput';
import Button from '../../Form/atoms/Button';
import ButtonWithLoading from '../../Form/atoms/ButtonWithLoading';
import { StyledLabel } from '../../Form/atoms/Label';
import IconButton from '../../Form/atoms/IconButton';
import { TypeCellAlignment } from '../';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.ui};
  `}
`;
const StyledButton = styled(Button)`
  flex-shrink: 0;
`;

const StyledLoadingButton = styled(ButtonWithLoading)`
  flex-shrink: 0;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const EditContainer = styled.div`
  min-width: 320px;
  background-color: var(--grey-2);
  z-index: 99;
  position: absolute;
  bottom: -15px;
  left: -11px;
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

const TextContainer = styled.div<{ alignment: TypeCellAlignment }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;

  ${({ alignment }) => alignment === 'center' && css`
    justify-content: center;
  `}

  ${({ alignment }) => alignment === 'right' && css`
    justify-content: flex-end;
`}

  ${StyledIconButton} {
    opacity: 0;
    position: absolute;
    top: 7px;
    right: 0;
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
  alignment?: TypeCellAlignment
  toLink?: string
  saveCallback?: (inputValue: string, rowKey: string) => void
}

type IEditableCell = OwnProps & InputHTMLAttributes<HTMLInputElement>

const EditCell: React.FC<IEditableCell> = ({
  type = 'text',
  placeholder = '',
  defaultValue,
  rowKey,
  alignment = 'left',
  toLink = '',
  saveCallback,
  ...props
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const handleSave = useCallback(async (value: string) => {
    setLoading(true);
    if (saveCallback) {
      await saveCallback(value, rowKey);
    }
    setIsEditMode(false);
    setLoading(false);
  }, [rowKey, saveCallback]);

  const verifyKeyPress = useCallback(async (eve: React.KeyboardEvent<HTMLInputElement>) => {

    // var code = parseInt(eve.key, 10);
    const code = eve.keyCode | eve.which | parseInt(eve.key, 10);

    if (code === 13 && handleSave) {
      await handleSave(updatedValue);
      setIsEditMode(false);
    }

    if (code === 27) {
      setUpdatedValue(defaultValue);
      setIsEditMode(false);
    }

  }, [handleSave, updatedValue, defaultValue]);

  const editContainerRef = useRef<HTMLDivElement>(null);

  const onClickOutsideEdit = () => {
    setUpdatedValue(defaultValue);
    setIsEditMode(false);
  };

  useClickOutside(editContainerRef, onClickOutsideEdit);

  return (
    <Container>
      {isEditMode
        ? (
          <EditContainer ref={editContainerRef}>
            <SmallInput
              {...props}
              autoFocus
              label=''
              disabled={loading}
              type={type}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onKeyUp={(eve: React.KeyboardEvent<HTMLInputElement>) => verifyKeyPress(eve)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUpdatedValue(e.target.value); }}
            />
            <StyledLoadingButton
              onClick={() => {
              handleSave(updatedValue);
              }}
              size='small'
              loading={loading}
            >
              {loading ? 'Saving' : 'Save'}
            </StyledLoadingButton>
            {!loading && (
              <StyledButton
                onClick={() => setIsEditMode(false)}
                design='secondary'
                size='small'
              >Cancel
              </StyledButton>)}
          </EditContainer>)
        : (
          <TextContainer alignment={alignment}>
            {toLink ? <StyledLink to={toLink}>{updatedValue}</StyledLink> : updatedValue}
            <StyledIconButton icon='Edit' weight='light' size={16} onClick={() => setIsEditMode(true)} />
          </TextContainer>)}
    </Container>
  );
};

export default EditCell;