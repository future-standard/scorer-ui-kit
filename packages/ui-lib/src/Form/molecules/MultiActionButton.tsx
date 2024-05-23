import React, { ButtonHTMLAttributes, useCallback, useState } from 'react';
import styled from 'styled-components';
import ButtonSwitcher from '../atoms/ButtonSwitcher';
const Container = styled.div`
  position: relative;
`;


const ButtonText = styled.div`
  color: var(--white-a12, rgba(255, 255, 255, 0.92));
  text-align: center;
  font-size: var(--button-font-size, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ButtonList = styled.div<{minWidth: number, isOpen: boolean}>`
  min-width: ${({ minWidth }) => minWidth}px;
  display: ${({isOpen}) => isOpen ? 'inline-flex' : 'none'};
  border-radius: 3px;
  border: 1px solid var(--primary-9);
  background: linear-gradient(135deg, #72C3EE 0%, #5CACEE 100%);
  // box-shadow: var(--button-lift-hover-x, 0px) var(--button-lift-hover-y, 4px) var(--button-lift-hover-blur, 8px) var(--button-lift-hover-spread, 0px) var(--shadows-primary-elevate, rgba(33, 129, 255, 0.36));
  box-shadow: 0px 4px 8px rgba(33, 129, 255, 0.36);
  min-height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
  minWidth?: number
  minHeight?: number
}

const MultiActionButton: React.FC<IMultiButtonProps> = ({
  minWidth = 177,
}) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
      setIsOpen((prev) => !prev);
  },[]);

  return(
    <Container>
      <ActiveButton icon={'Success'} isOpen={isOpen} onClick={toggleOpen}><ButtonText>Example Action</ButtonText></ActiveButton>
      <ButtonList {...{isOpen, minWidth}}>
        <div>
          <div className='OptionButton'>Example Action 1</div>
          <div className='OptionButton'>Example Action 2</div>
        </div>
      </ButtonList>
    </Container>
  );
};

export default MultiActionButton;

