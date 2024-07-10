import React, { useCallback, useState, SelectHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Label, { StyledLabel } from './Label';
import Icon, { IconWrapper } from '../../Icons/Icon';


export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  ${IconWrapper} {
    position: absolute;
    top: calc(50% - 7px);
    right: 10px;
    pointer-events: none;
  }
`;

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
  ${({theme: {styles}}) => css`
    ${styles.form.input.default.normal};
  `}

  &:disabled {
    ${({theme: {styles}}) => css`
      ${styles.form.input.disabled.normal};
    `}
    cursor: not-allowed;
  }

  &::-ms-expand {
    display: none;
  }
`;

const Container = styled.div<{ isCompact?: boolean, activePlaceholder: boolean, isLabelSameRow?: boolean, marginBottom: boolean }>`

${({ isCompact }) => isCompact && css`
  ${StyledLabel} {
      span {
        margin-bottom: 6px;
      }
    }
  `}

${({ isLabelSameRow }) => isLabelSameRow && css`
  ${StyledLabel} {
    display: flex;
    align-items: center;
    span {
      margin: 0 10px 0 0;
    }
  }
`};

${({marginBottom}) =>  !marginBottom && css`
  ${StyledLabel} {
    margin-bottom: 0;
  }
`};

  ${StyledSelect} {
    ${({ theme }) => css`
      border: 1px solid ${theme.styles.form.input.default.normal.borderColor};
      font-family: ${theme.fontFamily.data};
      ${theme.typography.form.input.value.normal};
    `};

    ${({ theme: { typography }, isCompact }) => isCompact && css`
      height: 30px;
      padding: 0 25px 0 10px;
      ${typography.form.input.value.compact};
    `};

    ${({ theme, activePlaceholder }) => activePlaceholder && css`
      ${theme.typography.form.input.placeholder.normal};
    `};

    ${({ theme, isCompact, activePlaceholder }) => isCompact && activePlaceholder && css`
      ${theme.typography.form.input.placeholder.compact};
    `};

    option {
      font-style: normal;
      ${({ theme }) => css`
        ${theme.typography.form.input.value.normal};
      `};

      ${({ theme: { typography }, isCompact }) => isCompact && css`
        ${typography.form.input.value.compact};
      `};
    }
    font-weight: 400;
  }
`;

interface ILabel {
  htmlFor: string
  text: string
  isSameRow?: boolean
}

interface OwnProps {
  label?: ILabel
  isCompact?: boolean
  placeholder?: string
  marginBottom?: boolean
  changeCallback?: (value: string) => void
}

type ISelect = OwnProps & SelectHTMLAttributes<HTMLSelectElement>

const SelectField: React.FC<ISelect> = ({
  placeholder,
  label,
  isCompact,
  defaultValue,
  changeCallback = () => { },
  children,
  marginBottom = true,
  ...props
}) => {

  const [activePlaceholder, setPlaceholderStatus] = useState<boolean>(!defaultValue ? true : false);

  const handleOnChange = useCallback((e) => {

    const { value } = e.target;

    setPlaceholderStatus(prev => {
      if (prev) { return false; }
      return prev;
    });
    changeCallback(value);
  }, [changeCallback]);

  const renderSelect = useCallback((htmlFor?: string) => (
    <SelectWrapper>
      <StyledSelect
        id={htmlFor}
        {...props}
        defaultValue={defaultValue ? defaultValue : ''}
        onChange={handleOnChange}
      >
        {!defaultValue && <option value='' disabled hidden>{placeholder}</option>}
        {children}
      </StyledSelect>
      <Icon icon='Down' color='dimmed' size={11} />
    </SelectWrapper>
  ), [children, defaultValue, handleOnChange, placeholder, props]);

  return (
    <Container {...{ isCompact, activePlaceholder }} isLabelSameRow={label?.isSameRow} marginBottom={marginBottom}>
      {label
        ? (
          <Label htmlFor={label.htmlFor} labelText={label.text}>
            {renderSelect(label.htmlFor)}
          </Label>
        )
        : renderSelect()}
    </Container>
  );
};

export default SelectField;