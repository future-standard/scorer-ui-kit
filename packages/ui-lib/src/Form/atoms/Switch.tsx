import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import { StyledLabel } from './Label';


enum SwitchPosition {
  Off = 0,
  On = 1,
  Neutral = 2,
  Locked = 3
}

type PositionKey = 'off' | 'on' | 'neutral' | 'locked';

const getPositionKey = (switchPos : SwitchPosition) : PositionKey => {
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
    top: calc(var(--switch-border-width) * -1);
    left: calc(var(--switch-border-width) * -1);
    bottom: calc(var(--switch-border-width) * -1);
    right: calc(var(--switch-border-width) * -1);
    pointer-events: none;
    border-radius: 12px;
    box-shadow:
      0px 2px 2px 0px var(--grey-a4) inset,
      0px -8px 8px 0px var(--grey-a2) inset,
      0px 2px 4px var(--black-a4),
      0px -2px 4px var(--white-a4);
  }
`;

const SwitchInner = styled.div<{ position: PositionKey}>`
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

const LabelText = styled.span``;

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
const SpinnerWrapper = styled.div``;

const Container = styled(StyledLabel)<{$activeTheming: string, $loading: boolean, $useIntent: boolean, $themeState: string, $position: SwitchPosition, $checked?: boolean}>`
  user-select: none;
  display: inline-flex;
  gap: 8px;
  align-items: center;

  ${SwitchOuter}{
    ${({$activeTheming, $themeState}) => css`
      border-color: var(--switch-${$themeState}-${$activeTheming}-border);
      background-color: var(--switch-${$themeState}-${$activeTheming}-background);
    `};

    ${({ $activeTheming }) => $activeTheming === 'locked' && css`
      background-color: var(--switch-special-locked-background);
      border-color: var(--switch-special-locked-border);
    `};

    ${({ $activeTheming }) => $activeTheming === 'failure' && css`
      background-color: var(--switch-special-failure-background);
      border-color: var(--switch-special-failure-border);
    `};

    ${({$activeTheming, $loading}) => $loading && css`
      background-color: var(--switch-default-${$activeTheming}-background);
      border-color: var(--switch-default-${$activeTheming}-border);
    `};

  }

  ${SwitchInner}{
    ${({$activeTheming, $themeState}) => css`
      background-color: var(--switch-${$themeState}-${$activeTheming}-inner);
    `};

    transition:
      left var(--speed-fast) var(--easing-primary-in-out),
      border var(--speed-fast) var(--easing-primary-in-out),
      width var(--speed-fast) var(--easing-primary-in-out);

    ${({ $activeTheming }) => $activeTheming === 'locked' && css`
      width: calc(100% - var(--switch-border-width));
      background-color: var(--switch-special-locked-inner);
      box-shadow: none;

      ${IconWrapper} svg {
        transform: translateX(-1px);
      }
    `}

    ${({ $activeTheming }) => $activeTheming === 'failure' && css`
      background-color: var(--switch-special-failure-inner);
    `}

    ${({$activeTheming, $loading}) => $loading && css`
      border-color: var(--switch-default-${$activeTheming}-inner);
      box-shadow: none;
    `};

  }

  &:hover {
    ${SwitchInner}{
      left: ${({$useIntent, $position}) =>
        $useIntent && $position === SwitchPosition.Off && 'calc(var(--position-off) + var(--switch-intent-offset))' ||
        $useIntent && $position === SwitchPosition.On && 'calc(var(--position-on) - var(--switch-intent-offset))'
      };
    }
  }
`;

export type TypeSwitchState = 'default' | 'loading' | 'locked' | 'disabled' | 'failure';

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
  defaultChecked?: boolean
  onChangeCallback?: (checked: boolean, indeterminate?: boolean) => void;
}

const Switch : React.FC<IProps> = ({
  state = 'default',
  leftTheme = 'off',
  rightTheme = 'on',
  labelText,
  onChangeCallback,
  checked,
  defaultChecked = false
}) => {
  const isControlled = checked !== undefined;
  const initialChecked = isControlled ? checked : defaultChecked;
  const initialPosition = initialChecked ? SwitchPosition.On : SwitchPosition.Off;
  const initialTheme = initialChecked ? rightTheme : leftTheme;

  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const inputRef = useRef<HTMLInputElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<SwitchPosition>(initialPosition);
  const [activeTheming, setActiveTheming] = useState<string>(initialTheme);
  const [switchState, setSwitchState] = useState<TypeSwitchState>('default');
  const [justUpdated, setJustUpdated] = useState<boolean>(false);
  const [innerSize, setInnerSize] = useState<number>(0);
  

  const updateSwitchPositionAndTheme = useCallback(() => {
    if (isControlled) {
      setPosition(checked ? SwitchPosition.On : SwitchPosition.Off);
      setActiveTheming(checked ? rightTheme : leftTheme);
    } else if (inputRef.current) {
      inputRef.current.checked = internalChecked;
      setPosition(internalChecked ? SwitchPosition.On : SwitchPosition.Off);
      setActiveTheming(internalChecked ? rightTheme : leftTheme);
    }
  }, [checked, isControlled, internalChecked, leftTheme, rightTheme]);

  useEffect(() => {
    updateSwitchPositionAndTheme();
  }, [updateSwitchPositionAndTheme]);
  

  const positionSwitch = useCallback(() => {
    if (isControlled) {
      setPosition(checked ? SwitchPosition.On : SwitchPosition.Off);
      setActiveTheming(checked ? rightTheme : leftTheme);
    } else {
      setPosition(internalChecked ? SwitchPosition.On : SwitchPosition.Off);
      setActiveTheming(internalChecked ? rightTheme : leftTheme);
    }
  }, [checked, isControlled, leftTheme, rightTheme, internalChecked]);


  const customOnChange =  useCallback(() => {
    if (state === 'locked' || state === 'disabled') return;

    if (isControlled) {
      onChangeCallback?.(!checked);
    } else {
      const newChecked = !internalChecked;
      setInternalChecked(newChecked);
      onChangeCallback?.(newChecked);
    }
    positionSwitch();
  }, [isControlled, checked, internalChecked, onChangeCallback, state, positionSwitch]);

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

  useEffect(() => {
    if(innerRef.current){
      setInnerSize( parseInt( getComputedStyle(innerRef.current).getPropertyValue('--switch-inner-size') ));
    }
  }, [innerRef]);


  return (
    <Container onChange={customOnChange} onMouseLeave={ () => setJustUpdated(false) } $activeTheming={activeTheming} $loading={state === 'loading'} $useIntent={ !justUpdated && (state === 'default' || state === 'failure')} $themeState={switchState} $position={position} $checked={inputRef.current?.checked}>
      <SwitchOuter>
        <SwitchInner position={getPositionKey(position)} ref={innerRef}>
          {state === 'failure' ? <IconWrapper><Icon icon='Exclamation' color='danger' size={18} weight='regular' /></IconWrapper> : null}
          {state === 'locked' ? <IconWrapper><Icon icon='Locked' color='switch-special-locked-icon' size={12} weight='regular' /></IconWrapper> : null}
          {state === 'loading' && innerSize > 0 ? <SpinnerWrapper><Spinner styling='simple' custom={{ size: innerSize }} /></SpinnerWrapper> : null}
        </SwitchInner>
      </SwitchOuter>
      {labelText ? <LabelText>{labelText}</LabelText> : null}
      <RealInput ref={inputRef} type='checkbox' disabled={state !== 'default' && state !== 'failure'} defaultChecked={!isControlled ? defaultChecked : checked} />
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