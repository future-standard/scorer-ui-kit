import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { removeAutoFillStyle, resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';

const IconContainer = styled.div`
  padding: 0 2px;
`;

const Container = styled.div<{ hasBorder: boolean, disabled: boolean, noBackground: boolean, width?: string }>`
  ${({ hasBorder, disabled, noBackground, width }) => css`
  
    transition: all var(--speed-normal) var(--easing-primary-in);
    gap: 6px;
    height: var(--input-compact-height);
    padding: 0;
    align-items: center;
    display: flex;
    border-radius: 3px;

    ${hasBorder && css`
      padding: 0 8px;
      border: 1px solid var(--filter-button-stroke-color);
      box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);

      &:hover {
        border: var(--primary-7) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--primary-a2);

      }
      ${IconContainer}{
        padding: 0;
      }
    `};

    ${disabled && css`
      opacity: 50%;
      cursor: not-allowed;
      `
    };

    ${width && css`
      width: ${width};
    `};

    background-color: ${noBackground ? 'transparent' : 'var(--grey-1)'};
    
    &:focus-within {
      background-color: ${noBackground ? 'transparent' : 'var(--grey-1)'};
      border: ${hasBorder ? '1px solid var(--primary-9)' : 'none'};
      box-shadow: 0px 4px 9px 0px ${noBackground ? 'transparent' : 'var(--primary-a2)'};
    }

  `};

  ${IconWrapper} {
    flex-shrink: 0;
    display: flex;
  }

  
`;

const CrossButton = styled.button`
  ${resetButtonStyles};
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  width: 26px;

  ${IconWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;



const StyledInput = styled.input<{ color: string }>`
  ${removeAutoFillStyle};

  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  color: var(--grey-12);
  
  &::placeholder {
    ${({color}) => color && `color: var(--${color})`};
    color: var(--grey-11);
    font-style: italic;
  }

  &:disabled {
    cursor: not-allowed;
  }

  font-size: 12px;
  border: none;
  height: 100%;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`;

interface OwnProps {
  color?: 'mono' | 'dimmed' | 'subtle';
  hasBorder?: boolean
  iconSize?: number
  noBackground?: boolean
  width?: string
  hasCrossButton?: boolean
  onCrossClick?: () => void
}

export type IBasicSearchInput = OwnProps & InputHTMLAttributes<HTMLInputElement>

const BasicSearchInput: React.FC<IBasicSearchInput> = ({
  color = 'subtle',
  hasBorder = true,
  iconSize = 12,
  disabled = false,
  noBackground = false,
  hasCrossButton = false,
  onCrossClick = () => {},
  width,
  ...props
}) => {
  return (
    <Container {...{ hasBorder, disabled, noBackground, width }}>
      <IconContainer>
        <Icon {...{ color }} icon='Search' weight='regular' size={iconSize} />
      </IconContainer>
      <StyledInput
        {...{ color, disabled }}
        {...props}
      />
      {hasCrossButton && <CrossButton onClick={onCrossClick}> <Icon icon='CloseCompact' color='dimmed' size={12} /></CrossButton>}
    </Container>
  );
};

export default BasicSearchInput;