import React, { ButtonHTMLAttributes, Fragment, useCallback, useState } from 'react';
import styled from 'styled-components';
import ButtonSwitcher from '../atoms/ButtonSwitcher';
import MultiButtonOption from '../atoms/MultiButtonOption';
const Container = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-radius: 3px;
  border: 1px solid var(--primary-9);
  background: linear-gradient(135deg, #72C3EE 0%, #5CACEE 100%);
  box-shadow: var(--button-lift-default-x, 0px) var(--button-lift-default-y, 2px) var(--button-lift-default-blur, 4px) var(--button-lift-default-spread, 2px) var(--button-lift-default-color, rgba(221, 234, 248, 0.08));
`;

const ActiveButton = styled(ButtonSwitcher)`
`;

interface IButtonItem {
  id: string
  icon?: string
  hasFlipArrow?: boolean
  text?: string
}

type IMultiButtonItem = IButtonItem &  ButtonHTMLAttributes<HTMLButtonElement>;

export interface IMultiButtonProps  {
  activeId: string
  buttonList: IMultiButtonItem[]
  hasFlipArrow?: boolean
  isSortAscending?: boolean
}

const MultiActionButton: React.FC<IMultiButtonProps> = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
      setIsOpen((prev) => !prev);
  },[]);

  return(
    <Container>
      <ActiveButton icon={'Success'} isOpen={isOpen} onClick={toggleOpen} text='Example Action' />
      { isOpen ?
          <Fragment>
              <MultiButtonOption text='Example Action 1' icon = 'Add' />
              <MultiButtonOption text='Example Action 2' icon = 'Success'/>
              <MultiButtonOption text='Example Action 3' icon = 'Success'/>
          </Fragment>
          : null
      }
    </Container>
  );
};

export default MultiActionButton;

