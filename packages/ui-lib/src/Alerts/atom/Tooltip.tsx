import React from 'react';
import styled, { css } from 'styled-components';
import { AlertType } from '..';
import Icon, { IconWrapper } from '../../Icons/Icon';

const Triangle = styled.div<{type: AlertType}>`
    content:'';
    display:block;
    width:0;
    height:0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${({type}) => `var(--${type})` };
`;

const Container = styled.div<{directionStyle: string}>`
  position: absolute;
  top: 60px;
  left: 60px;
  display: flex;
  ${({directionStyle}) => directionStyle && css`${directionStyle}`};
`;

const MessageWrapper = styled.div<{type: AlertType}>`
  background-color: ${({type}) => `var(--${type})` };
  border-radius: 3px;
  border: 1px solid var(--grey-a7);
  box-shadow: 0px 2px var(--input-focused-blur, 3px) 0px rgba(0, 16, 64, 0.06);
  backdrop-filter: blur(2px);

  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;


  color: var(--white-12);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;

  ${IconWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

type ITooltip = {
  message: string
  icon?: string
  type?: AlertType
}

const getDirectionStyle = (state: ITooltipPosition) => {

  switch (state) {
    case 'top-start':
      return `
              flex-direction: column;
              ${Triangle} {
                margin-left: 16px;
              }
            `;

    case 'top-center':
      return `
              flex-direction: column;
              align-items: center;
            `;

    case 'top-end':
      return `
              flex-direction: column;
              align-items: end;
              ${Triangle} {
                margin-right: 16px;
              }
            `;

    case 'left':
      return `
              flex-direction: row;
              align-items: center;
              ${Triangle} {
                transform: rotate(-90deg);
                margin-right: -4px;
              }
            `;

    case 'right':
      return `
              flex-direction: row-reverse;
              align-items: center;
              ${Triangle} {
                transform: rotate(90deg);
                margin-left: -4px;
              }
            `;

    case 'bottom-start':
      return `
              flex-direction: column-reverse;
              ${Triangle} {
                transform: rotate(180deg);
                margin-left: 16px;
              }
            `;

    case 'bottom-end':
      return `
              flex-direction: column-reverse;
              align-items: end;
              ${Triangle} {
                transform: rotate(180deg);
                margin-right: 16px;
              }
            `;

    case 'bottom-center':

    // eslint-disable-next-line no-fallthrough
    default:
      return `
              flex-direction: column-reverse;
              align-items: center;
              ${Triangle} {
                transform: rotate(180deg);
              }
            `;
  }
};

type ITooltipPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left' | 'right';

const Tooltip: React.FC<ITooltip> = ({icon, message, type}) => {
  return(
    <Container directionStyle={getDirectionStyle('top-start')}>
      <Triangle type={type || 'neutral'}/>
      <MessageWrapper type={type || 'neutral'}>
        <Icon icon={icon || ''} size={16}/>
        {message}
      </MessageWrapper>
    </Container>
  );
};

export default Tooltip;