import React from 'react';
import styled, { css } from 'styled-components';
import { CheckMark } from '../../svg';
import { IInputOptionsType } from '..';
import { dimensions } from '../../theme/common';

const Title = styled.div`
  font-family: var(--font-ui);
  display: block;
  color: var(--grey-12);
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
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
      fill: var(--inverse);
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
  gap: 12px;

  ${({ selected, disabled }) => css`
    
    ${FakeCheckbox}, ${FakeRadioButton} {
      border-color: var(--input-toggle-unchecked-border-color);
    }

    &:hover {
      cursor: pointer;
      ${Title} {
        color: var(--input-label-hover);
      }

      ${FakeCheckbox}, ${FakeRadioButton} {
        border-color: var(--input-toggle-unchecked-hover-border-color);
        ${FakeInnerRadio}, ${FakeCheckboxInner} {
          background-color: var(--input-toggle-unchecked-background-color);
        }
      }
    }

    ${selected && css`
      ${Title} {
        color: var(--input-label-active);
        font-weight: 600;
      }

      ${FakeCheckbox}, ${FakeRadioButton} {
        border-color: var(--input-toggle-checked-border-color);
        ${FakeInnerRadio}, ${FakeCheckboxInner} {
          background-color: var(--input-toggle-checked-background-color);
        }
      }
      
      &:hover {
        cursor: pointer;
        ${Title} {
          color: var(--input-label-hover);
        }

        ${FakeCheckbox}, ${FakeRadioButton} {
          border-color: var(--input-toggle-checked-hover-border-color);
          ${FakeInnerRadio}, ${FakeCheckboxInner} {
            background-color: var(--input-toggle-checked-hover-background-color);
          }
        }
      }
     

    `};

    ${disabled && css`
      cursor: not-allowed;
    `};

    ${FakeCheckbox}, ${FakeRadioButton} {
      transition: border-color var(--speed-faster) var(--easing-primary-out);
    }

    ${FakeInnerRadio} {
      transition: background-color var(--speed-faster) var(--easing-primary-out);
    }

    ${Title}{
      transition: color var(--speed-faster) var(--easing-primary-out);
    }
    
  `};
`;

interface IFilterOption {
  title: string
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