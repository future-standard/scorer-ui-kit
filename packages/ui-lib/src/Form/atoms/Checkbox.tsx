import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { CheckMark } from '../../svg';
import { dimensions } from '../../themes/common';

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
      fill: ${({theme, color}) => theme.colors.icons[color]};
    }
  }
`;

const Container = styled.label<{visualState?: CheckboxState, disabled?: boolean}>`
  user-select: none;


  ${({visualState, disabled, theme: { styles }}) => visualState === CheckboxState.Off && css`
    ${CheckboxOuter}{
      ${styles.form.checkbox.unchecked.default};
    }

    ${!disabled && css`
      &:hover ${CheckboxOuter} {
        ${styles.form.checkbox.unchecked.hover};
      }`
    };

    ${disabled && css`
      ${CheckboxOuter}{
        ${styles.form.checkbox.unchecked.disabled};
        cursor: not-allowed;
      }
    `}
  `}

  ${({visualState, disabled, theme: { styles }}) => visualState === CheckboxState.On && css`
    ${CheckboxOuter}{
      ${styles.form.checkbox.checked.default};
      border: none;
    }
    ${!disabled && css`
      &:hover ${CheckboxOuter}{
        ${styles.form.checkbox.checked.hover};
        border: none;
      }`
    };

    ${disabled && css`
      ${CheckboxOuter}{
        ${styles.form.checkbox.checked.disabled};
        cursor: not-allowed;
      }
    `}
  `}

  ${({visualState, disabled, theme: { styles }}) => visualState === CheckboxState.Indeterminate && css`
    ${CheckboxOuter}{
      ${styles.form.checkbox.indeterminate.default};
    }
    ${!disabled && css`
      &:hover ${CheckboxOuter}{
        ${styles.form.checkbox.indeterminate.hover};
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

    let state = checked ? CheckboxState.On : CheckboxState.Off;
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