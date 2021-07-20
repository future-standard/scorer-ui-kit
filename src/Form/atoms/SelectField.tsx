import React, { useCallback, useState, SelectHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Label, { StyledLabel } from './Label';
import { ISelectSizes } from '../index';
import Icon, { IconWrapper } from '../../Icons/Icon';


const Container = styled.div<{ styleSize?: ISelectSizes, }>`

${({ styleSize }) => (styleSize === 'small') && css`
  ${StyledLabel} {
      span {
        margin-bottom: 6px;
      }
    }
  `}
`;

const StyledSelect = styled.select<{ styleSize?: ISelectSizes, activePlaceholder: boolean, selectWidth?: string }>`
  box-sizing: border-box;
  outline: none;
  border-radius: 3px;
  height: 40px;
  padding: 0 25px 0 15px;
  appearance: none;
  width: ${({ selectWidth }) => selectWidth ? selectWidth : '220px'};

  &::-ms-expand {
    display: none;
  }

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
`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  ${IconWrapper} {
    position: absolute;
    top: calc(50% - 7px);
    right: 10px;
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
  selectWidth?: string
}

type ISelect = OwnProps & SelectHTMLAttributes<HTMLSelectElement>

const SelectField: React.FC<ISelect> = ({
  placeholder,
  labelProps,
  styleSize,
  selectWidth,
  onChange = () => { },
  children,
  ...props
}) => {

  const [activePlaceholder, setPlaceholderInactive] = useState<boolean>(true);

  const handleOnChange = useCallback((e) => {
    setPlaceholderInactive(prev => {
      if (prev) { return false; }
      return prev;
    });

    const { value } = e.target;
    onChange(value);
  }, [onChange]);

  const renderSelect = (htmlFor?: string) => (
    <SelectWrapper>
      <StyledSelect
        id={htmlFor}
        {...{ styleSize, activePlaceholder, selectWidth }}
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
    <Container {...{ styleSize }}>
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