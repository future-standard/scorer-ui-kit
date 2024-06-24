import React, { ButtonHTMLAttributes, Fragment, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import MultiButtonOption from '../atoms/MultiButtonOption';
import Icon, { IconWrapper } from '../../Icons/Icon';
import { TypeButtonSizes, TypeButtonDesigns } from '..';
import { resetButtonStyles } from '../../common';


const TOGGLE_ICON_WIDTH = 20;

const Container = styled.div`
  font-family: var(--font-ui);
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
  isLoading?: boolean
}

type IMultiButtonItem = IButtonItem &  ButtonHTMLAttributes<HTMLButtonElement>;

export interface ISplitButtonProps  {
  activeId: string
  buttonList: IMultiButtonItem[]
  isSortAscending?: boolean
  size?: TypeButtonSizes
  design?: TypeButtonDesigns | string
  textMaxWidth?: string
  disabled?: boolean
}

const ActiveBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const ToggleIcon = styled.button`
  ${resetButtonStyles}
  display: flex;
  height: var(--button-height);
  padding: 3px var(--button-icon-h-padding);
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-left: 1px solid var(--toggle-icon-border);
  cursor: pointer;

  ${IconWrapper} {
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      path, g {
        stroke: var(--toggle-icon);
      }
    }
  }

  &:hover:enabled {
    background: var(--toggle-icon-hover-bg);
  }

  &:active:enabled {
    background: var(--toggle-icon-active-bg);
    ${IconWrapper} {
      svg path, svg g {
        stroke: var(--toggle-icon-active);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;

    ${IconWrapper} {
      svg path {
        stroke: var(--toggle-icon-disabled);
      }
    }
  }

`;

const validateMaxWidth = (btnTextMaxWidth: number| null | undefined, textMaxWidth?: string) : string | undefined  => {

  if(textMaxWidth)
    return textMaxWidth;

  if(btnTextMaxWidth)
    return `${btnTextMaxWidth - TOGGLE_ICON_WIDTH}px`;

  return undefined;
};

const SplitButton: React.FC<ISplitButtonProps> = ({activeId, buttonList, design='primary', size, textMaxWidth, disabled = false, ...rest}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeBtnId, setActiveBtnId] = useState(activeId);
  const activeBtnRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
      setIsOpen((prev) => !prev);
  },[]);

  const updateActiveId = useCallback((newId: string)=>{
    setActiveBtnId(newId);
    toggleOpen();
  },[toggleOpen]);

  return(
    <Container className={`multi-button-${design} button-${size}`} {...rest}>
      <ActiveBtnWrapper ref={activeBtnRef}>
        {buttonList.filter((button) => button.id === activeBtnId)
            .map(({id, text, icon, disabled: disabledItemProp, ...props}) => (
            <MultiButtonOption
              key={id}
              noBorderTop
              active
              disabled={disabled || disabledItemProp}
              {...{text, icon, design, size}}
              {...props}
              />
            ))
        }
        <ToggleIcon onClick={toggleOpen} disabled={disabled}>
          { <Icon icon={isOpen ? 'Close' : 'Down'} size={8} />}
        </ToggleIcon>
      </ActiveBtnWrapper>
      { isOpen ?
          <Fragment>
            {buttonList.filter((button) => button.id !== activeBtnId)
                .map(({id, text, icon, disabled: disabledItemProp, ...props}) => (
                <MultiButtonOption
                  key={id}
                  {...{text, icon, design, size}}
                  disabled={disabledItemProp}
                  textMaxWidth={validateMaxWidth(activeBtnRef.current?.clientWidth,textMaxWidth)}
                  {...props}
                  onClick={() => updateActiveId(id)}
                  />
              ))
            }
          </Fragment>
          : null
      }
    </Container>
  );
};

export default SplitButton;