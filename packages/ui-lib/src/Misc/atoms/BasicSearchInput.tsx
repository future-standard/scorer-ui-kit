import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { removeAutoFillStyle, resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';

const Container = styled.div<{ hasBorder: boolean, disabled: boolean, noBackground: boolean, width?: string }>`
  ${({ theme: { styles }, theme, hasBorder, disabled, noBackground, width }) => css`
    ${hasBorder && css`
      border: ${styles.filters.searchInput.default.border};
      box-shadow: ${styles.filters.searchInput.default.boxShadow};
    `};

    ${disabled && css`
      opacity: 50%;
      cursor: not-allowed;
      `
    };

    ${width && css`
      width: ${width};
    `};

    background-color: ${noBackground ? 'transparent' : theme.styles.filters.searchInput.default.backgroundColor};

    &:focus-within {
      background-color: ${noBackground ? 'transparent' : styles.filters.searchInput.focused.backgroundColor};
      border: ${noBackground ? 'transparent' : styles.filters.searchInput.focused.border};
    }

  `};

  ${IconWrapper} {
    flex-shrink: 0;
    display: flex;
  }

  height: 30px;
  padding: 0 0 0 8px;
  align-items: center;
  display: flex;
  border-radius: 3px;
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

  ${({ theme: {typography, colors}, theme, color }) => css`
    font-family: ${theme.fontFamily.ui};
    ${typography.filters.searchInput.value};

    &::placeholder {
      ${typography.filters.searchInput.placeholder};
      color: ${colors.icons[color]};
      font-size: 12px;
    }
  `};

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
  margin-left: 7px;
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
      <Icon {...{ color }} icon='Search' weight='regular' size={iconSize} />
      <StyledInput
        {...{ color, disabled }}
        {...props}
      />
      {hasCrossButton && <CrossButton onClick={onCrossClick}> <Icon icon='CloseCompact' color='dimmed' size={12} /></CrossButton>}
    </Container>
  );
};

export default BasicSearchInput;