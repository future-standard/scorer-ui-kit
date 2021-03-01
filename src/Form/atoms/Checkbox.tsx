import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';

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

const IconWrapper = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`;

const Container = styled.label<{visualState?: CheckboxState, disabled?: boolean}>`
  user-select: none;


  ${({visualState, disabled, theme: { styles }}) => visualState === CheckboxState.Off && css`
    ${CheckboxOuter}{
      ${styles.form.checkbox.unchecked.default};
    }

    &:hover ${CheckboxOuter} {
      ${styles.form.checkbox.unchecked.hover};
    }

    ${disabled && css`
      ${CheckboxOuter}{
        ${styles.form.checkbox.unchecked.disabled};
      }
    `}
  `}

  ${({visualState, disabled, theme: { styles }}) => visualState === CheckboxState.On && css`
    ${CheckboxOuter}{
      ${styles.form.checkbox.checked.default};
      border: none;
    }

    &:hover ${CheckboxOuter}{
      ${styles.form.checkbox.checked.hover};
      border: none;
    }

    ${disabled && css`
      ${CheckboxOuter}{
        ${styles.form.checkbox.checked.disabled};
      }
    `}
  `}

  ${({visualState, theme: { styles }}) => visualState === CheckboxState.Indeterminate && css`
    ${CheckboxOuter}{
      ${styles.form.checkbox.indeterminate.default};
    }

    &:hover ${CheckboxOuter}{
      ${styles.form.checkbox.indeterminate.hover};
    }



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

  return (
    <Container onChange={customOnChange} {...{indeterminate, disabled, visualState}}>
      <CheckboxOuter>
        <CheckboxInner>
          {visualState === CheckboxState.On ? <IconWrapper><Icon icon='CloseCompact' color='inverse' size={18} weight='regular' /></IconWrapper> : null}
        </CheckboxInner>
      </CheckboxOuter>
      <RealInput type='checkbox' checked={isChecked} readOnly {...{disabled}} /> {/* disabled={state !== 'default' && state !== 'failure'} */}
    </Container>
  );

};

export default Checkbox;
export { CheckboxState };