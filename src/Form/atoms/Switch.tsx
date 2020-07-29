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

const intentPosition = (left: string, checked?: boolean) : string => {
  let offset = checked ? -2 : 2;
  let intentLeft = (parseInt(left) + offset).toString();

  return `${intentLeft}px`;
};

const RealInput = styled.input`
  display: none;
`;
const SwitchOuter = styled.div`
  border: 1px solid #DDD;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
`;
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

const SwitchInner = styled.div`
  position: absolute;
  box-sizing: border-box;
`;
const LabelText = styled.span`
  flex: 1;
  display: flex;

  font-family: ${({theme}) => theme.fontFamily.ui };
  display: block;
  color: hsl(207, 5%, 57%);
  font-size: 14px;
  font-weight: 500;
  line-height: ${ p => p.theme.dimensions.form.switch.outer.height };
  margin-left: 10px;
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

const Container = styled.label<{activeTheming: string, loading: boolean, useIntent: boolean, themeState: string, position: SwitchPosition, checked?: boolean}>`
  user-select: none;
  display: flex;

  ${SwitchInner}{
    ${({theme, position, themeState, activeTheming}) => theme && css`
      ${theme.dimensions.form.switch.inner};
      left: ${theme.dimensions.form.switch.positions[getPositionKey(position)]};
      top: ${theme.dimensions.form.switch.positions.top};
      transition:
        left ${theme.animation.speed.normal} ${theme.animation.easing.primary.out},
        border ${theme.animation.speed.normal} ${theme.animation.easing.primary.out},
        width ${theme.animation.speed.normal} ${theme.animation.easing.primary.out};

      ${theme.colors.form.switch[activeTheming][themeState].inner}
    `}

    ${p => p.activeTheming === 'locked' && css`
      width: calc(100% - ${parseInt(p.theme.dimensions.form.switch.positions.locked) * 2}px);
    `}

    ${p => p.loading && css`
      background: transparent;
      top: 1px;
    `}
  }

  ${SwitchOuter}{
    ${({theme, activeTheming, themeState}) => theme && css`
      ${theme.colors.form.switch[activeTheming][themeState].outer};
      ${theme.dimensions.form.switch.outer}};
      flex: 0 0 ${theme.dimensions.form.switch.outer.width}};
    `}
  }

  &:hover {
    ${SwitchInner}{
      left: ${p => p.useIntent && intentPosition(p.theme.dimensions.form.switch.positions[getPositionKey(p.position)], p.checked)};
    }
  }
`;

type TypeSwitchState = 'default' | 'loading' | 'locked' | 'disabled' | 'failure';

interface IProps {
  labelText?: string
  leftTheme?: string
  rightTheme?: string
  state?: TypeSwitchState
  onChange?: (event: any) => void;
}

const Switch : React.FC<IProps> = ({ state = 'default', leftTheme = 'off', rightTheme = 'on', labelText, onChange }) => {

  const initialPosition = SwitchPosition.Off;

  const inputRef = useRef<HTMLInputElement>(null);
  const [ position, setPosition ] = useState<SwitchPosition>(initialPosition);
  const [ activeTheming, setActiveTheming ] = useState<string>( leftTheme );
  const [ switchState, setSwitchState ] = useState<TypeSwitchState>('default');

  const positionSwitch = useCallback(() => {
    if(inputRef.current?.checked){
     setPosition(SwitchPosition.On);
     setActiveTheming(rightTheme);
   } else if(!inputRef.current?.checked){
     setPosition(SwitchPosition.Off);
     setActiveTheming(leftTheme);
   }
  }, [setPosition, setActiveTheming, leftTheme, rightTheme, inputRef]);

  const customOnChange = (e: any) => {
    positionSwitch();
    if(onChange){ onChange(e); }
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

  return <Container onChange={customOnChange} activeTheming={activeTheming} loading={state === 'loading'} useIntent={state === 'default' || state === 'failure'} themeState={switchState} position={position} checked={inputRef.current?.checked}>
    <SwitchOuter>
      <SwitchInner>
        {state === 'failure' ? <IconWrapper><Icon icon='Exclamation' color='danger' size={18} weight='regular' /></IconWrapper> : null}
        {state === 'locked' ? <IconWrapper><Icon icon='Locked' color='dimmed' size={10} weight='heavy' /></IconWrapper> : null}
        {state === 'loading' ? <SpinnerWrapper><Spinner size='small' styling='simple' /></SpinnerWrapper> : null}
      </SwitchInner>
    </SwitchOuter>
    {labelText ? <LabelText>{labelText}</LabelText> : null}
    <RealInput ref={inputRef} type='checkbox' disabled={state !== 'default' && state !== 'failure'} />
  </Container>;

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