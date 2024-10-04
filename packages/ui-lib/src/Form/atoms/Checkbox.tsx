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

  ${({theme}) => theme && css`
    transition: border-color ${theme.animation.speed.faster} ${theme.animation.easing.primary.easeInOut};
  `};
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

  ${({visualState, disabled}) => visualState === CheckboxState.Off && css`
    ${CheckboxOuter}{
      border-color: var(--grey-9);
      border: var(--grey-9) 2px solid;
    }

    ${!disabled && css`
      &:hover ${CheckboxOuter} {
        border-color: var(--primary-9);
        border: var(--primary-9) 2px solid;
      }`
    };

    ${disabled && css`
      ${CheckboxOuter}{
        background-color: var(--grey-1);
        border-color: var(--grey-6);
        border: var(--grey-6) 2px solid;
        cursor: not-allowed;
      }
    `}
  `}

  ${({visualState, disabled}) => visualState === CheckboxState.On && css`
    ${CheckboxOuter}{
      box-shadow: inset 0px 1px 5px 0px var(--grey-a1);
      background-color: var(--primary-9);
      border: none;
    }
    ${!disabled && css`
      &:hover ${CheckboxOuter}{
        box-shadow: inset 0px 1px 5px 0px var(--grey-a1);
        background-color: var(--primary-9);
        border: none;
      }`
    };

    ${disabled && css`
      ${CheckboxOuter}{
        box-shadow: inset 0px 1px 5px 0px var(--grey-a1);
        background-color: var(--grey-6);
        cursor: not-allowed;
      }
      ${IconWrapper}{
        opacity: 0.65;
      }
    `}
  `}

  ${({visualState, disabled}) => visualState === CheckboxState.Indeterminate && css`
    ${CheckboxOuter}{
      box-shadow: inset 0px 1px 5px 0px var(--grey-a1);
      background-color: var(--primary-6);
    }
    ${!disabled && css`
      &:hover ${CheckboxOuter}{
        box-shadow: inset 0px 1px 5px 0px var(--grey-a1);
        background-color: var(--primary-6);
      }
    `};

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
          {visualState === CheckboxState.On ? <IconWrapper color='inverse'><CheckMark color='inverse' stroke='inverse' size={12} weight={iconWeight} /></IconWrapper> : null}
        </CheckboxInner>
      </CheckboxOuter>
      <RealInput type='checkbox' checked={isChecked} readOnly {...{disabled}} /> {/* disabled={state !== 'default' && state !== 'failure'} */}
    </Container>
  );

};

export default Checkbox;
export { CheckboxState };