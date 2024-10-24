import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { CheckMark } from '../../svg';
import { dimensions } from '../../theme/common';

enum CheckboxState {
  Off = "off",
  On = "on",
  Indeterminate = "indeterminate"
}

const RealInput = styled.input`
  display: none;
`;
const CheckboxOuter = styled.div`
  cursor: pointer;

  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;

  transition: 
    background-color var(--speed-faster) var(--easing-primary-out),
    border-color var(--speed-faster) var(--easing-primary-out);
`;

const CheckboxInner = styled.div<{}>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`;

const IconWrapper = styled.div<{color: ISvgIcons['color']}>`
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
      fill: ${({color}) => `var(--${color})`};
    }
  }
`;

const Container = styled.label<{visualState?: CheckboxState, disabled?: boolean}>`
  display: inline-block;
  user-select: none;
  ${CheckboxOuter}{
    border: var(--input-toggle-unchecked-border-color) 2px solid;
  }
  
  ${({visualState, disabled}) => visualState === CheckboxState.Off && css`
    /* Unchecked */
    ${CheckboxOuter}{
      background-color: var(--input-toggle-unchecked-background-color);
      border-color: var(--input-toggle-unchecked-border-color);
    }

    /* Unchecked - Hover */
    ${!disabled && css`
      &:hover ${CheckboxOuter} {
        background-color: var(--input-toggle-unchecked-hover-background-color);
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }`
    };

    /* Unchecked - Disabled */
    ${disabled && css`
      ${CheckboxOuter}{
        background-color: var(--input-toggle-unchecked-disabled-background-color);
        border-color: var(--input-toggle-unchecked-disabled-border-color);
        border: var(--grey-6) 2px solid;
        cursor: not-allowed;
      }
    `}
  `}

  ${({visualState, disabled}) => visualState === CheckboxState.On && css`
    /* Checked */  
    ${CheckboxOuter}{
      background-color: var(--input-toggle-checked-background-color);
      border-color: var(--input-toggle-checked-border-color);
    }
    /* Checked - Hover */
    ${!disabled && css`
      &:hover ${CheckboxOuter}{
        background-color: var(--input-toggle-checked-hover-background-color);
        border-color: var(--input-toggle-checked-hover-border-color);
      }`
    };

    /* Checked - Disabled */    
    ${disabled && css`
      ${CheckboxOuter}{
        background-color: var(--input-toggle-checked-disabled-background-color);
        border-color: var(--input-toggle-checked-disabled-border-color);
        cursor: not-allowed;
      }
      ${IconWrapper}{
        opacity: 0.65;
      }
    `}
  `}

  ${({visualState, disabled}) => visualState === CheckboxState.Indeterminate && css`
    ${CheckboxOuter}{
      background-color: var(--input-toggle-intermediate-background-color);
      border-color: var(--input-toggle-intermediate-border-color);
    }
    ${!disabled && css`
      &:hover ${CheckboxOuter}{
        background-color: var(--input-toggle-intermediate-hover-background-color);
        border-color: var(--input-toggle-intermediate-hover-border-color);
      }
    `};
    ${disabled && css`
      ${CheckboxOuter}{
        background-color: var(--input-toggle-intermediate-disabled-background-color);
        border-color: var(--input-toggle-intermediate-disabled-border-color);
        cursor: not-allowed;
      }
      ${IconWrapper}{
        opacity: 0.65;
      }
    `}

  `}

`;

interface IProps {
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChangeCallback?: (checked: boolean, indeterminate?: boolean) => void;
}

const Checkbox : React.FC<IProps> = ({ indeterminate = false, disabled, checked = false, onChangeCallback }) => {

  const [ isChecked, setIsChecked ] = useState<boolean>(checked);
  const [ visualState, setVisualState ] = useState<CheckboxState>(checked ? CheckboxState.On : CheckboxState.Off);

  const customOnChange = (e: any) => {
    const checked = e.target.checked;

    setIsChecked(checked);
    if(onChangeCallback){ onChangeCallback(checked); }
  };

  useEffect(() => {

    const state = checked ? CheckboxState.On : CheckboxState.Off;
    // state = indeterminate ? CheckboxState.Indeterminate : state;

    setVisualState( state );

  }, [checked, isChecked, setVisualState]);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked, setIsChecked]);

  const iconWeight : number = dimensions.icons.weights['regular'];

  return (
    <Container onChange={customOnChange} {...{indeterminate, disabled, visualState}}>
      <CheckboxOuter>
        <CheckboxInner>
          {visualState === CheckboxState.On ? <IconWrapper color='input-toggle-icon-color'><CheckMark color='input-toggle-icon-color' stroke='inverse' size={12} weight={iconWeight} /></IconWrapper> : null}
        </CheckboxInner>
      </CheckboxOuter>
      <RealInput type='checkbox' checked={isChecked} readOnly {...{disabled}} /> {/* disabled={state !== 'default' && state !== 'failure'} */}
    </Container>
  );

};

export default Checkbox;
export { CheckboxState };