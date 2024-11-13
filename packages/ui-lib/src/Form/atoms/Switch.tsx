import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';

enum SwitchPosition {
  Off = 0,
  On = 1,
  Neutral = 2,
  Locked = 3
}

const getPositionKey = (switchPos : SwitchPosition) => {
  switch (switchPos) {
    case SwitchPosition.Off:
      return 'off';
    case SwitchPosition.On:
      return 'on';
    case SwitchPosition.Neutral:
      return 'neutral';
    case SwitchPosition.Locked:
      return 'locked';
    default:
      return 'off';
  }

};

const RealInput = styled.input`
  display: none;
`;
const SwitchOuter = styled.div`
  border: var(--switch-border-width) solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  width: var(--switch-width);
  height: var(--switch-height);
  border-radius: calc(var(--switch-height) / 2);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -var(--switch-border-width);
    left: -var(--switch-border-width);
    bottom: -var(--switch-border-width);
    right: -var(--switch-border-width);
    pointer-events: none;
    border-radius: 12px;
    box-shadow: 
      0px 2px 2px 0px var(--grey-a4) inset, 
      0px -8px 8px 0px var(--grey-a2) inset,
      0px 2px 4px var(--black-a4),
      0px -2px 4px var(--white-a4);
  }
`;

const SwitchInner = styled.div<{ position: 'off' | 'on' | 'neutral'| 'locked'}>`
  --offset: calc(((var(--switch-height) - var(--switch-inner-size)) / 2) - var(--switch-border-width));
  --position-off: var(--offset);
  --position-on: calc(var(--switch-width) - var(--switch-inner-size) - (var(--switch-border-width)*2) - var(--offset));
  --position-neutral: calc((var(--switch-width) / 2) - (var(--switch-inner-size) / 2) - var(--offset));
  --position-locked: var(--offset);

  position: absolute;
  top: var(--offset);
  left: ${({position}) => position && `var(--position-${position})`};
  
  box-sizing: border-box;
  height: var(--switch-inner-size);
  width: var(--switch-inner-size);
  border-radius: calc(var(--switch-inner-size) / 2);
  
  background-color: var(--switch-default-off-background);

  box-shadow: 
    0px 2px 4px 0px var(--black-a8),
    0px 1px 2px 0px var(--white-a5) inset, 
    0px -1px 1px 0px var(--black-a5) inset;
`;

const LabelText = styled.span`
  font-family: var(--font-ui);

  flex: 1;
  margin-left: 10px;
  display: block;

  line-height: ${ p => p.theme.dimensions.form.switch.outer.height };

  ${ p => p.theme.typography.form.input.label };
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
const SpinnerWrapper = styled.div`
  margin-top: 1px;
`;

const Container = styled.label<{activeTheming: string, $loading: boolean, useIntent: boolean, themeState: string, position: SwitchPosition, checked?: boolean}>`
  user-select: none;
  display: flex;
  
  ${SwitchOuter}{
    ${({activeTheming, themeState}) => css`
      border-color: var(--switch-${themeState}-${activeTheming}-border);
      background-color: var(--switch-${themeState}-${activeTheming}-background);
    `};
  }

  ${SwitchInner}{
    ${({activeTheming, themeState}) => css`
      background-color: var(--switch-${themeState}-${activeTheming}-inner);
    `};

    transition:
      left var(--speed-fast) var(--easing-primary-in-out),
      border var(--speed-fast) var(--easing-primary-in-out),
      width var(--speed-fast) var(--easing-primary-in-out);

    /* 
    ${p => p.activeTheming === 'locked' && css`
      width: calc(100% - ${parseInt(p.theme.dimensions.form.switch.positions.locked) * 2}px);
    `}

    ${p => p.$loading && css`
      background: transparent;
      top: 1px;
    `} */
  }

  &:hover {
    ${SwitchInner}{
      left: ${({useIntent, position}) => 
        useIntent && position === SwitchPosition.Off && 'calc(var(--position-off) + var(--switch-intent-offset))' ||
        useIntent && position === SwitchPosition.On && 'calc(var(--position-on) - var(--switch-intent-offset))'
      };
    }
  }
`;

type TypeSwitchState = 'default' | 'loading' | 'locked' | 'disabled' | 'failure';

const isTypeSwitchState = (value: string): value is TypeSwitchState => {
  return (
    value === 'default' ||
    value === 'loading' ||
    value === 'locked' ||
    value === 'disabled' ||
    value === 'failure'
  );
};

type SwitchThemes = 'on' | 'off' | 'danger';

interface IProps {
  labelText?: string
  leftTheme?: SwitchThemes
  rightTheme?: SwitchThemes
  state?: TypeSwitchState
  checked?: boolean
  onChangeCallback?: (checked: boolean, indeterminate?: boolean) => void;
}

const Switch : React.FC<IProps> = ({ state = 'default', leftTheme = 'off', rightTheme = 'on', labelText, onChangeCallback, checked = false}) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [ position, setPosition ] = useState<SwitchPosition>(checked ? SwitchPosition.On : SwitchPosition.Off);
  const [ activeTheming, setActiveTheming ] = useState<string>( leftTheme );
  const [ switchState, setSwitchState ] = useState<TypeSwitchState>('default');

  useEffect(() => {
    setPosition(checked ? SwitchPosition.On : SwitchPosition.Off);
    if (inputRef.current) {
      inputRef.current.checked = checked;
    }
  }, [checked]);

  const positionSwitch = useCallback(() => {
    if(inputRef.current?.checked){
     setPosition(SwitchPosition.On);
     setActiveTheming(rightTheme);
   } else if(!inputRef.current?.checked){
     setPosition(SwitchPosition.Off);
     setActiveTheming(leftTheme);
   }
  }, [setPosition, setActiveTheming, leftTheme, rightTheme, inputRef]);

  const customOnChange = () => {
    positionSwitch();
    if(onChangeCallback){ onChangeCallback(inputRef.current?.checked || false); }
  };

  /**
   * updateThemeChoice()
   * If for some reason we need to change the left or right theme in context, this makes sure
   * things get updated. (i.e. in StoryBook)
   */
  const updateThemeChoice = useCallback(() => {
    if(position === SwitchPosition.On){
      setActiveTheming(rightTheme);
    } else if(position === SwitchPosition.Off){
      setActiveTheming(leftTheme);
    }
  }, [position, rightTheme, leftTheme]);

  /** Watch for that theme change.  */
  useEffect(() => {
    updateThemeChoice();
  }, [leftTheme, rightTheme, updateThemeChoice]);

  useEffect(() => {
    if(isTypeSwitchState(state))
      setSwitchState( stateCheck(state) );

  }, [state, setSwitchState]);

  /** Watch for locking prop. */
  useEffect(() => {
    if(state === 'locked'){
      setPosition(SwitchPosition.Locked);
      setActiveTheming('locked');
    } else if(state === 'failure'){
      setPosition(SwitchPosition.Neutral);
      setActiveTheming('failure');
    } else {
      positionSwitch();
    }
  }, [state, setPosition, positionSwitch]);

  return (
    <Container onChange={customOnChange} activeTheming={activeTheming} $loading={state === 'loading'} useIntent={state === 'default' || state === 'failure'} themeState={switchState} position={position} checked={inputRef.current?.checked}>
      <SwitchOuter>
        <SwitchInner position={getPositionKey(position)}>
          {state === 'failure' ? <IconWrapper><Icon icon='Exclamation' color='danger' size={18} weight='regular' /></IconWrapper> : null}
          {state === 'locked' ? <IconWrapper><Icon icon='Locked' color='dimmed' size={10} weight='light' /></IconWrapper> : null}
          {state === 'loading' ? <SpinnerWrapper><Spinner size='small' styling='simple' /></SpinnerWrapper> : null}
        </SwitchInner>
      </SwitchOuter>
      {labelText ? <LabelText>{labelText}</LabelText> : null}
      <RealInput ref={inputRef} type='checkbox' disabled={state !== 'default' && state !== 'failure'} defaultChecked={checked} />
    </Container>
    );

};

const stateCheck = (state: TypeSwitchState) : TypeSwitchState => {
  switch(state){
    case 'locked':
      return 'default';
    case 'failure':
      return 'default';
    default:
      return state;
  }
};


export default Switch;
export { SwitchPosition };