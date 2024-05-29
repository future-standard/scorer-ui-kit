import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import { TypeButtonDesigns } from '..';

const Container = styled.div<{removeBorderTop?: boolean}>`
  ${({removeBorderTop}) => removeBorderTop ?
      `border-top: none`
      : css`
        border-top: 1px solid var(--primary-9)`
  };
  display: flex;
  flex: 1 0 0;
  height: var(--button-height);
  align-items: center;
  align-self: stretch;
`;

const OptionText = styled.div`
    height: var(--button-height);
    color: var(--white-a12);
    text-align: center;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    padding: 0px var(--button-h-padding);
    font-size: var(--button-font-size);
    justify-content: center;
    align-items: center;
    align-self: stretch;
    white-space: break-spaces;
`;

const LeftIconWrapper = styled.div<{ isAscendingIcon: boolean }>`
  ${({ isAscendingIcon }) => isAscendingIcon && css`
      transform: scaleY(-1);
  `};

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

interface IProps {
  text: string
  icon?: string
  isLoading?: boolean
  design?: TypeButtonDesigns
  removeBorderTop?: boolean
}

const MultiButtonOption : FC<IProps> = ({text, icon = '', isLoading = false, design = 'primary', removeBorderTop = false}) => {
  return(
    <Container {...{removeBorderTop}}>
      <LeftIconWrapper isAscendingIcon={icon === 'FilterAscending'} >
        {isLoading ? <Spinner size='small' styling={design} /> : <Icon icon={icon} />}
      </LeftIconWrapper>
      <OptionText>{text}</OptionText>
    </Container>
  );
};

export default MultiButtonOption;