import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { AlertType } from '..';
import Icon, { IconWrapper } from '../../Icons/Icon';
import ReactDOM from 'react-dom';

const ARROW_SIZE = 8;
const ARROW_MARGIN = 16;

const ARROW = styled.div<{ type: AlertType }>`
    content:'';
    display:block;
    width:0;
    height:0;
    border-left: ${ARROW_SIZE}px solid transparent;
    border-right: ${ARROW_SIZE}px solid transparent;
    border-bottom: ${ARROW_SIZE}px solid ${({ type }) => `var(--${type})`};
`;

const TooltipWrapper = styled.div<{ directionStyle: string }>`
  position: absolute;
  display: flex;
  ${({ directionStyle }) => directionStyle && css`${directionStyle}`};
`;

const MessageWrapper = styled.div<{ type: AlertType }>`
  background-color: ${({ type }) => `var(--${type})`};
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

const getDirectionStyle = (state: ITooltipPosition, coords: DOMRect ) => {

  const { left, top, width, height } = coords;

  console.log('cords', coords);
  switch (state) {
    case 'bottom-start':
      return `
              flex-direction: column;
              top: ${top + height}px;
              left: ${left - ARROW_SIZE - ARROW_MARGIN + (width/2)}px;
              ${ARROW} {
                margin-left: ${ARROW_MARGIN}px;
              }
            `;

    case 'bottom-center':
      return `
              flex-direction: column;
              top: ${top + height}px;
              left: ${left + (width/2)}px;
              transform: translateX(-50%);
              align-items: center;
            `;

    case 'bottom-end':
      return `
              flex-direction: column;
              align-items: end;
              top: ${top + height}px;
              left: ${left + ARROW_SIZE + ARROW_MARGIN + (width/2)}px;
              transform: translateX(-100%);
              ${ARROW} {
                margin-right: 16px;
              }
            `;

    case 'right':
      return `
              flex-direction: row;
              align-items: center;
              top: ${top + (height/2)}px;
              left: ${left + width}px;
              transform: translateY(-50%);
              ${ARROW} {
                transform: rotate(-90deg);
                margin-right: -4px;
              }
            `;

    case 'left':
      return `
              flex-direction: row-reverse;
              align-items: center;
              top: ${top + (height/2)}px;
              left: ${left}px;
              transform: translate(-100%, -50%);
              ${ARROW} {
                transform: rotate(90deg);
                margin-left: -4px;
              }
            `;

    case 'top-start':
      return `
              flex-direction: column-reverse;
              top: ${top}px;
              left: ${left - ARROW_SIZE - ARROW_MARGIN + (width/2)}px;
              transform: translateY(-100%);
              ${ARROW} {
                transform: rotate(180deg);
                margin-left: ${ARROW_MARGIN}px;
              }
            `;

    case 'top-end':
      return `
              flex-direction: column-reverse;
              align-items: end;
              top: ${top}px;
              left: ${left + ARROW_SIZE + ARROW_MARGIN + (width/2)}px;
              transform: translate(-100%, -100%);
              ${ARROW} {
                transform: rotate(180deg);
                margin-right: 16px;
              }
            `;

    case 'top-center':

    // eslint-disable-next-line no-fallthrough
    default:
      return `
              flex-direction: column-reverse;
              align-items: center;
              top: ${top}px;
              left: ${left + (width/2)}px;
              transform: translate(-50%, -100%);
              ${ARROW} {
                transform: rotate(180deg);
              }
            `;
  }
};

type ITooltip = {
  message: string
  tooltipFor: string
  icon?: string
  type?: AlertType
  tooltipPosition?: ITooltipPosition
}

export type ITooltipPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left' | 'right';

const Tooltip: React.FC<ITooltip> = ({ icon, message, type, tooltipFor, tooltipPosition }) => {

  const [coords, setCoords] = useState<DOMRect | null>(null);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const element = document.getElementById(tooltipFor);
    if (element) {
      const handleMouseOver = () => {
        const rect = element.getBoundingClientRect();
        setCoords(rect);
        setVisible(true);
      };
      const handleMouseOut = () => {
        setVisible(false);
      };

      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);

      return () => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [tooltipFor]);

  if (!visible || !coords) return null;

  return ReactDOM.createPortal(
    <TooltipWrapper directionStyle={getDirectionStyle( tooltipPosition || 'top-center', coords)}>
      <ARROW type={type || 'neutral'} />
      <MessageWrapper type={type || 'neutral'}>
        <Icon icon={icon || ''} size={16} />
        {message}
      </MessageWrapper>
    </TooltipWrapper>,
    document.body
  );
};

export default Tooltip;