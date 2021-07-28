import React, { useCallback, useState, SelectHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Label, { StyledLabel } from './Label';
import { ISelectSizes } from '../index';
import Icon, { IconWrapper } from '../../Icons/Icon';


const StyledSelect = styled.select`
  box-sizing: border-box;
  outline: none;
  border-radius: 3px;
  height: 40px;
  padding: 0 25px 0 15px;
  appearance: none;
  line-height: 1.56;
  width: 100%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &::-ms-expand {
    display: none;
  }
`;

const Container = styled.div<{ styleSize?: ISelectSizes, activePlaceholder: boolean }>`
${({ styleSize }) => (styleSize === 'small') && css`
  ${StyledLabel} {
      span {
        margin-bottom: 6px;
      }
    }
  `}

  ${StyledSelect} {
    ${({ theme }) => css`
      border: 1px solid ${theme.styles.form.input.default.normal.borderColor};
      font-family: ${theme.fontFamily.data};
      ${theme.typography.form.input.value.normal};
    `};

    ${({ theme: { typography }, styleSize }) => (styleSize === 'small') && css`
      height: 30px;
      padding: 0 25px 0 10px;
      ${typography.form.input.value.compact};
    `};

    ${({ theme, activePlaceholder }) => activePlaceholder && css`
      ${theme.typography.form.input.placeholder.normal};
    `};

    ${({ theme, styleSize, activePlaceholder }) => (styleSize === 'small') && activePlaceholder && css`
      ${theme.typography.form.input.placeholder.compact};
    `};

    option {
      font-style: normal;
      ${({ theme }) => css`
        ${theme.typography.form.input.value.normal};
      `};

      ${({ theme: { typography }, styleSize }) => (styleSize === 'small') && css`
        ${typography.form.input.value.compact};
      `};
    }
    font-weight: 400;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  ${IconWrapper} {
    position: absolute;
    top: calc(50% - 7px);
    right: 10px;
    pointer-events: none;
  }
`;

interface ILabel {
  htmlFor: string
  labelText: string
}

interface OwnProps {
  labelProps?: ILabel
  styleSize?: ISelectSizes
  placeholder?: string
}

type ISelect = OwnProps & SelectHTMLAttributes<HTMLSelectElement>

const SelectField: React.FC<ISelect> = ({
  placeholder,
  labelProps,
  styleSize,
  onChange = () => { },
  children,
  ...props
}) => {

  const [activePlaceholder, setPlaceholderInactive] = useState<boolean>(true);

  const handleOnChange = useCallback((e) => {

    const { value } = e.target;

    setPlaceholderInactive(prev => {
      if (prev) { return false; }
      return prev;
    });

    onChange(value);
  }, [onChange]);

  const renderSelect = (htmlFor?: string) => (
    <SelectWrapper>
      <StyledSelect
        id={htmlFor}
        {...props}
        defaultValue=''
        onChange={handleOnChange}
      >
        <option value='' disabled selected hidden>{placeholder}</option>
        {children}
      </StyledSelect>
      <Icon icon='Down' color='dimmed' size={11} />
    </SelectWrapper>
  );

  return (
    <Container {...{ styleSize, activePlaceholder }}>
      {labelProps
        ? (
          <Label {...labelProps}>
            {renderSelect(labelProps.htmlFor)}
          </Label>
        )
        : renderSelect()}
    </Container>
  );
};

export default SelectField;