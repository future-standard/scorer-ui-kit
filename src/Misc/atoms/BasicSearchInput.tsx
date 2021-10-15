import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';

const Container = styled.div<{ hasBorder: boolean, disabled: boolean, noBackground: boolean, width?: string }>`
  ${({ theme, hasBorder, disabled, noBackground, width }) => css`
    ${hasBorder && css`
      border: 1px solid ${theme.styles.form.input.default.normal.borderColor};
    `};

    ${disabled && css`
      opacity: 50%;
      cursor: not-allowed;
      `
    };

    ${width && css`
      width: ${width};
    `};

    background-color: ${noBackground ? 'transparent' : 'hsla(0, 0%, 100%, 1.000)'};
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

const StyledInput = styled.input<{ color: string }>`
  ${({ theme, color }) => css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.form.input.value.compact};
    &::placeholder {
      ${theme.typography.form.input.placeholder.compact};
      color: ${theme.colors.icons[color]};
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
}

export type IBasicSearchInput = OwnProps & InputHTMLAttributes<HTMLInputElement>

const BasicSearchInput: React.FC<IBasicSearchInput> = ({
  color = 'subtle',
  hasBorder = true,
  iconSize = 11,
  disabled = false,
  noBackground = false,
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
    </Container>
  );
};

export default BasicSearchInput;