import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import { TypeButtonDesigns } from '..';

const Container = styled.div<{noBorderTop?: boolean}>`
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
`;

const OptionText = styled.div`
    padding: 0px var(--button-h-padding);
    font-size: var(--button-font-size);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--text-color);
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
    }
  }
`;

export interface IMultiButtonOption {
  text: string
  icon?: string
  isLoading?: boolean
  design?: TypeButtonDesigns
  noBorderTop?: boolean
  textMaxWidth?: string
}

const MultiButtonOption : FC<IMultiButtonOption> = ({text, icon = '', isLoading = false, design = 'primary', noBorderTop = false, textMaxWidth=''}) => {
  return(
    <Container {...{noBorderTop}}>
      <LeftIconWrapper isAscendingIcon={icon === 'FilterAscending'} >
        {isLoading ? <Spinner size='small' styling={design} /> : <Icon icon={icon} />}
      </LeftIconWrapper>
      <TextWrapper {...{textMaxWidth}}><OptionText>{text}</OptionText></TextWrapper>
    </Container>
  );
};

export default MultiButtonOption;