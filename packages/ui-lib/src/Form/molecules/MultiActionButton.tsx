import React, { ButtonHTMLAttributes, Fragment, useCallback, useState } from 'react';
import styled from 'styled-components';
import MultiButtonOption from '../atoms/MultiButtonOption';
import { resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';
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

interface IButtonItem {
  id: string
  icon?: string
  text: string
}

type IMultiButtonItem = IButtonItem &  ButtonHTMLAttributes<HTMLButtonElement>;

export interface IMultiButtonProps  {
  activeId: string
  buttonList: IMultiButtonItem[]
  isSortAscending?: boolean
}

const StyledButton = styled.button`
  ${resetButtonStyles};
  font-family: var(--font-ui);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const ToggleIcon = styled.div`
  display: flex;
  height: var(--button-height);
  padding: 3px var(--button-icon-h-padding);
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-left: 1px solid var(--primary-9);
  ${IconWrapper} {
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const MultiActionButton: React.FC<IMultiButtonProps> = ({activeId, buttonList}) => {


  const [isOpen, setIsOpen] = useState(false);
  const [activeBtnId, _setActiveBtnId] = useState(activeId);

  const toggleOpen = useCallback(() => {
      // const buttonWidth = activeBtnRef.current.innerWidth;
      setIsOpen((prev) => !prev);
  },[]);

  return(
    <Container>
      <StyledButton type='button'>
        {buttonList.filter((button) => button.id === activeBtnId)
            .map(({id, text, icon}) => <MultiButtonOption key={id} noBorderTop text={text} icon={icon}/>
          )
        }
        <ToggleIcon onClick={toggleOpen}>
          { <Icon icon={isOpen ? 'Close' : 'Down'} size={8} />}
        </ToggleIcon>
      </StyledButton>
      { isOpen ?
          <Fragment>
            {buttonList.filter((button) => button.id !== activeBtnId)
                .map(({id, text, icon}) => <MultiButtonOption key={id} text={text} icon={icon}/>
              )
            }
          </Fragment>
          : null
      }
    </Container>
  );
};

export default MultiActionButton;

