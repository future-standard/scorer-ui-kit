import React, { useRef, useState } from 'react';
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

const Container = styled.label<{checkedState?: CheckboxState, disabled?: boolean}>`
  user-select: none;

  ${({checkedState, disabled}) => checkedState === CheckboxState.Off && css`
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

  ${({checkedState, disabled}) => checkedState === CheckboxState.On && css`
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

  ${({checkedState, disabled}) => checkedState === CheckboxState.Indeterminate && css`
    ${CheckboxOuter}{
      box-shadow: inset 0 1px 5px 0 hsla(205, 50%, 30%, 0.05);
      background-color: hsl(207, 95%, 66%);
    }
  `}



`;

interface IProps {
  disabled?: boolean
  indeterminate?: boolean
  onChangeCallback?: (event: any, id: string | number) => void;
}

const Switch : React.FC<IProps> = ({ indeterminate, disabled, onChangeCallback }) => {

  const initialState = CheckboxState.Off;

  const inputRef = useRef<HTMLInputElement>(null);
  const [ checkedState, setCheckedState ] = useState<CheckboxState>(initialState);

  const customOnChange = (e: any) => {
    let state = inputRef.current?.checked ? CheckboxState.On : CheckboxState.Off;
    state = inputRef.current?.indeterminate ? CheckboxState.Indeterminate : state;

    setCheckedState( state );
    if(onChangeCallback){ onChangeCallback(e, 123); }
  };

  return <Container onChange={customOnChange} {...{indeterminate, disabled, checkedState}}>
    {/* C - {checkedState} - {indeterminate ? 'Y':'N'} */}
    <CheckboxOuter>
      <CheckboxInner>
        {checkedState === CheckboxState.On ? <IconWrapper><Icon icon='CloseCompact' color='inverse' size={18} weight='regular' /></IconWrapper> : null}
      </CheckboxInner>
    </CheckboxOuter>
    <RealInput ref={inputRef} type='checkbox' {...{disabled, indeterminate}} /> {/* disabled={state !== 'default' && state !== 'failure'} */}
  </Container>;

};

export default Switch;
export { CheckboxState };