import React, { useEffect, useRef, useState } from 'react';
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

}
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

  ${({visualState, disabled}) => visualState === CheckboxState.Off && css`
    ${CheckboxOuter}{
      border: solid 2px hsl(208, 25%, 78%);
    }

    &:hover ${CheckboxOuter} {
      border: solid 2px hsl(195, 94%, 66%);
    }

    ${disabled && css`
      ${CheckboxOuter}{
        box-shadow: inset 0 1px 5px 0 hsla(205, 50%, 30%, 0.05);
        background-color: hsl(210, 20%, 90%);
      }
    `}
  `}

  ${({visualState, disabled}) => visualState === CheckboxState.On && css`
    ${CheckboxOuter}{
      box-shadow: inset 0 1px 5px 0 hsla(205, 50%, 30%, 0.05);
      background-color: hsl(207, 95%, 66%);
      border: none;
    }

    &:hover ${CheckboxOuter}{
      box-shadow: inset 0 1px 5px 0 hsla(205, 50%, 30%, 0.05);
      background-color: hsl(195, 99%, 64%);
      border: none;
    }

    ${disabled && css`
      ${CheckboxOuter}{
        border: solid 2px hsl(210, 20%, 90%);
        background-color: hsl(0, 0%, 97%);
      }
    `}
  `}

  ${({visualState, disabled}) => visualState === CheckboxState.Indeterminate && css`
    ${CheckboxOuter}{
      box-shadow: inset 0 1px 5px 0 hsla(205, 50%, 30%, 0.05);
      background-color: hsl(207, 95%, 66%);
    }
  `}

`;

interface IProps {
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChangeCallback?: (checked: boolean) => void;
}

const Switch : React.FC<IProps> = ({ indeterminate, disabled, checked = false, onChangeCallback }) => {

  // const inputRef = useRef<HTMLInputElement>(null);
  const [ isChecked, setIsChecked ] = useState<boolean>(checked);
  const [ visualState, setVisualState ] = useState<CheckboxState>(checked ? CheckboxState.On : CheckboxState.Off);

  const customOnChange = (e: any) => {
    const checked = e.target.checked

    // state = e.target.indeterminate ? CheckboxState.Indeterminate : state;

    setIsChecked(checked);
    if(onChangeCallback){ onChangeCallback(checked); }
  };

  useEffect(() => {
    // setIsChecked(checked);console.log("B")

    let state = checked ? CheckboxState.On : CheckboxState.Off;
    setVisualState( state );

  }, [isChecked, setVisualState])

  useEffect(() => {
    setIsChecked(checked);
  }, [checked, setIsChecked]);

  return <Container onChange={customOnChange} {...{indeterminate, disabled, visualState}}>
    <CheckboxOuter>
      <CheckboxInner>
        {visualState === CheckboxState.On ? <IconWrapper><Icon icon='CloseCompact' color='inverse' size={18} weight='regular' /></IconWrapper> : null}
      </CheckboxInner>
    </CheckboxOuter>
    <RealInput type='checkbox' checked={isChecked} readOnly={true} {...{disabled, indeterminate}} /> {/* disabled={state !== 'default' && state !== 'failure'} */}
  </Container>;

};

export default Switch;
export { CheckboxState };