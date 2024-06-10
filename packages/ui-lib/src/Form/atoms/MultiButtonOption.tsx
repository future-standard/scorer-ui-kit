import React, { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import { TypeButtonDesigns } from '..';
import { resetButtonStyles } from '../../common';

const StyledButton = styled.button<{noBorderTop?: boolean, active?: boolean}>`
  ${resetButtonStyles}

  color: var(--text-color);

  ${({noBorderTop}) => noBorderTop ?
      `border-top: none`
      : css`
        border-top: 1px solid var(--border-color)`
  };
  display: flex;
  flex: 1 0 0;
  height: var(--button-height);
  align-items: center;
  align-self: stretch;

  &:hover:enabled {
    background: var(--button-hover-bg);

    ${IconWrapper} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:active:enabled {
    background: var(--button-active-bg);

    ${({noBorderTop}) => noBorderTop ?
        `border-top: none`
        : css`
          border-top: 1px solid var(--border-active-color)`
    };

    ${IconWrapper} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:disabled {
    color: var(--text-disabled-color);
    cursor: not-allowed;
  }
`;

const OptionText = styled.div`
    font-family: var(--font-ui);
    font-size: var(--button-font-size);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const TextWrapper = styled.div<{textMaxWidth?:string}>`
  ${({textMaxWidth}) => textMaxWidth && css `max-width: ${textMaxWidth};`}
  display: flex;
  padding: 0px var(--button-h-padding);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const LeftIconWrapper = styled.div<{ isAscendingIcon: boolean }>`
  ${({ isAscendingIcon }) => isAscendingIcon && css`
      transform: scaleY(-1);
  `};

  height: var(--button-height);
  display: flex;
  padding: 3px var(--button-icon-h-padding);
  align-items: center;
  align-self: stretch;

  ${IconWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--button-icon-size);
      width: var(--button-icon-size);
      g, path {
        stroke: var(--white-a10);
      }
    }
  }
`;

export interface IMOption {
  text: string
  icon?: string
  isLoading?: boolean
  design?: TypeButtonDesigns | string
  noBorderTop?: boolean
  textMaxWidth?: string
  active?: boolean
}

export type IMultiButtonOption = IMOption &  ButtonHTMLAttributes<HTMLButtonElement>;

const MultiButtonOption : FC<IMultiButtonOption> = ({
  text, icon = '',
  isLoading = false,
  design = 'primary',
  noBorderTop = false,
  textMaxWidth='',
  ...props
}) => {

  return(
    <StyledButton {...{noBorderTop}} {...props}>
      <LeftIconWrapper isAscendingIcon={icon === 'FilterAscending'} >
        {isLoading ? <Spinner size='small' styling={design} /> : <Icon icon={icon} />}
      </LeftIconWrapper>
      <TextWrapper {...{textMaxWidth}}><OptionText>{text}</OptionText></TextWrapper>
    </StyledButton>
  );
};

export default MultiButtonOption;