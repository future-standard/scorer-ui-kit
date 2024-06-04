import React, { ButtonHTMLAttributes, Fragment, useCallback, useState } from 'react';
import styled from 'styled-components';
import MultiButtonOption from '../atoms/MultiButtonOption';
import Icon, { IconWrapper } from '../../Icons/Icon';
import { TypeButtonSizes } from '..';
const Container = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-radius: 3px;
  border: 1px solid var(--border);
  background: linear-gradient(135deg, var(--gradient-1) 0%, var(--gradient-2) 100%);
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
  size?: TypeButtonSizes
  design?: string
}

const ActiveButton = styled.div`
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
  border-left: 1px solid var(--border-color);
  cursor: pointer;

  ${IconWrapper} {
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const MultiActionButton: React.FC<IMultiButtonProps> = ({activeId, buttonList, design='primary'}) => {


  const [isOpen, setIsOpen] = useState(false);
  const [activeBtnId, setActiveBtnId] = useState(activeId);

  const toggleOpen = useCallback(() => {
      setIsOpen((prev) => !prev);
  },[]);

  const updateActiveId = useCallback((newId: string)=>{
    setActiveBtnId(newId);
    toggleOpen();
  },[toggleOpen]);

  return(
    <Container className={`multi-button-${design}`}>
      <ActiveButton>
        {buttonList.filter((button) => button.id === activeBtnId)
            .map(({id, text, icon, ...props}) => <MultiButtonOption key={id} noBorderTop {...{text, icon}} {...props}/>
          )
        }
        <ToggleIcon onClick={toggleOpen}>
          { <Icon icon={isOpen ? 'Close' : 'Down'} size={8} />}
        </ToggleIcon>
      </ActiveButton>
      { isOpen ?
          <Fragment>
            {buttonList.filter((button) => button.id !== activeBtnId)
                .map(({id, text, icon, ...props}) => <MultiButtonOption key={id} {...{text, icon}} {...props} onClick={() => updateActiveId(id)}/>
              )
            }
          </Fragment>
          : null
      }
    </Container>
  );
};

export default MultiActionButton;

