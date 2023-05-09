import React from 'react';
import styled, { css } from 'styled-components';
import { CheckMark } from '../../svg';
import { IInputOptionsType } from '..';
import { dimensions } from '../../themes/common';

const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.data};
  display: block;
  color: hsl(0, 0%, 56%);
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
  user-select: none;
  pointer-events: none;
`;

const FakeCheckbox = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
`;

const FakeCheckboxInner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`;

const CheckMarkWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    [stroke]{
      stroke: transparent;
    }
    [fill] {
      fill: ${({ theme }) => theme.colors.icons.inverse};
    }
  }
`;

const FakeRadioButton = styled.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
`;

const FakeInnerRadio = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`;

const Container = styled.div<{ disabled: boolean, selected: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  ${({ theme: { styles }, selected, disabled }) => styles && css`
    ${FakeCheckbox}, ${FakeRadioButton} {
      ${styles.form.checkbox.unchecked.default};
    }

    &:hover {
      cursor: pointer;
      ${Title} {
        color: ${styles.form.checkbox.checked.hover.backgroundColor};
      }

      ${FakeCheckbox} {
        ${styles.form.checkbox.unchecked.hover};
      }

      ${FakeRadioButton} {
        border-color: ${styles.form.checkbox.unchecked.hover.borderColor};
      }
    }

    ${selected && css`
      ${Title} {
        color: ${styles.form.checkbox.checked.default.backgroundColor};
      }
      ${FakeCheckbox} {
        ${styles.form.checkbox.checked.default};
        border: none;
      }

      ${FakeRadioButton} {
        border-color: ${styles.form.checkbox.checked.default.backgroundColor};
        ${FakeInnerRadio} {
          background-color: ${styles.form.checkbox.checked.default.backgroundColor};
        }
      }

      &:hover {
        ${FakeCheckbox}{
          ${styles.form.checkbox.checked.hover};
        }

        ${FakeRadioButton} {
          border-color: ${styles.form.checkbox.checked.hover.backgroundColor};
          ${FakeInnerRadio} {
            background-color: ${styles.form.checkbox.checked.hover.backgroundColor};
          }
        }
      }
    `};

    ${disabled && css`
      cursor: not-allowed;
    `};
  `};
`;

interface IFilterOption {
  title: string | null
  value?: string | number
  optionType?: IInputOptionsType
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
}

const FilterOption: React.FC<IFilterOption> = ({
  title,
  value,
  optionType = "text",
  selected = false,
  disabled = false,
  onClick = () => { },
  ...props
}) => {

  const iconWeight: number = dimensions.icons.weights['regular'];

  return (

    <Container
      {...{ onClick, disabled, selected}}
      {...props}
    >
      {(optionType === 'checkbox') && (
        <FakeCheckbox>
          <FakeCheckboxInner>
            {selected && <CheckMarkWrapper><CheckMark color='inverse' stroke='inverse' size={12} weight={iconWeight} /></CheckMarkWrapper>}
          </FakeCheckboxInner>
        </FakeCheckbox>
      )}
      {(optionType === 'radio') && <FakeRadioButton><FakeInnerRadio /></FakeRadioButton>}
      <Title>{title}</Title>
    </Container>
  );
};

export default FilterOption;