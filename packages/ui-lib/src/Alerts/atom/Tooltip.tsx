import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ITooltipType } from '..';
import Icon, { IconWrapper } from '../../Icons/Icon';
import ReactDOM from 'react-dom';

const ARROW_SIZE = 8;
const ARROW_MARGIN = 16;

const Arrow = styled.div<{ type: ITooltipType }>`
  content:'';
  display:block;
  width:0;
  height:0;
  border-left: ${ARROW_SIZE}px solid transparent;
  border-right: ${ARROW_SIZE}px solid transparent;
  border-bottom: ${ARROW_SIZE}px solid ${({ type }) => `var(--tooltip-${type}-arrow)`};
`;

const TooltipWrapper = styled.div<{ directionStyle: string, maxWidth?: string }>`
  position: absolute;
  display: flex;
  ${({ maxWidth }) => maxWidth && css` max-width: ${maxWidth}`};
  ${({ directionStyle }) => directionStyle && css`${directionStyle}`};
`;

const MessageWrapper = styled.div<{ type: ITooltipType }>`
  background-color: ${({ type }) => `var(--tooltip-${type})`};
  border-radius: 3px;
  border: 1px solid ${({ type }) => `var(--tooltip-${type}-border)`};
  box-shadow: 0px 2px var(--input-focused-blur, 3px) 0px rgba(0, 16, 64, 0.06);
  backdrop-filter: blur(2px);
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: var(--white-a12);
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

const getDirectionStyle = (state: ITooltipPosition, coords: DOMRect) => {

  const { left, top, width, height } = coords;

  const currentTop = top + window.scrollY;
  const currentLeft = left + window.scrollX;

  switch (state) {
    case 'bottom-end':
      return `
              flex-direction: column;
              top: ${currentTop + height}px;
              left: ${currentLeft - ARROW_SIZE - ARROW_MARGIN + (width / 2)}px;
              ${Arrow} {
                margin-left: ${ARROW_MARGIN}px;
              }
            `;

    case 'bottom-start':
      return `
              flex-direction: column;
              align-items: end;
              top: ${currentTop + height}px;
              left: ${currentLeft + ARROW_SIZE + ARROW_MARGIN + (width / 2)}px;
              transform: translateX(-100%);
              ${Arrow} {
                margin-right: ${ARROW_MARGIN}px;
              }
            `;

    case 'right-end':
      return `
              flex-direction: row;
              top: ${currentTop - (ARROW_SIZE / 2) - ARROW_MARGIN + (height / 2)}px;
              left: ${currentLeft + width}px;
              ${Arrow} {
                transform: rotate(-90deg);
                margin-right: -${(ARROW_SIZE / 2)}px;
                margin-top: ${ARROW_MARGIN}px;
              }
            `;

    case 'right-center':
      return `
              flex-direction: row;
              align-items: center;
              top: ${currentTop + (height / 2)}px;
              left: ${currentLeft + width}px;
              transform: translateY(-50%);
              ${Arrow} {
                transform: rotate(-90deg);
                margin-right: -${(ARROW_SIZE / 2)}px;
              }
            `;

    case 'right-start':
      return `
              flex-direction: row;
              align-items: end;
              top: ${currentTop + (ARROW_SIZE / 2) + ARROW_MARGIN + (height / 2)}px;
              left: ${currentLeft + width}px;
              transform: translateY(-100%);
              ${Arrow} {
                transform: rotate(-90deg);
                margin-right: -${(ARROW_SIZE / 2)}px;
                margin-bottom: ${ARROW_MARGIN}px;
              }
            `;

    case 'left-end':
      return `
              flex-direction: row-reverse;
              top: ${currentTop - (ARROW_SIZE / 2) - ARROW_MARGIN + (height / 2)}px;
              left: ${currentLeft}px;
              transform: translateX(-100%);
              ${Arrow} {
                transform: rotate(90deg);
                margin-left: -${(ARROW_SIZE / 2)}px;
                margin-top: ${ARROW_MARGIN}px;
              }
            `;

    case 'left-center':
      return `
              flex-direction: row-reverse;
              align-items: center;
              top: ${currentTop + (height / 2)}px;
              left: ${currentLeft}px;
              transform: translate(-100%, -50%);
              ${Arrow} {
                transform: rotate(90deg);
                margin-left: -${(ARROW_SIZE / 2)}px;
              }
            `;

    case 'left-start':
      return `
              flex-direction: row-reverse;
              align-items: end;
              top: ${currentTop + (ARROW_SIZE / 2) + ARROW_MARGIN + (height / 2)}px;
              left: ${currentLeft}px;
              transform: translate(-100%, -100%);
              ${Arrow} {
                transform: rotate(90deg);
                margin-left: -${(ARROW_SIZE / 2)}px;
                margin-bottom: ${ARROW_MARGIN}px;
              }
            `;
    case 'top-end':
      return `
              flex-direction: column-reverse;
              top: ${currentTop}px;
              left: ${currentLeft - ARROW_SIZE - ARROW_MARGIN + (width / 2)}px;
              transform: translateY(-100%);
              ${Arrow} {
                transform: rotate(180deg);
                margin-left: ${ARROW_MARGIN}px;
              }
            `;

    case 'top-center':
      return `
              flex-direction: column-reverse;
              align-items: center;
              top: ${currentTop}px;
              left: ${currentLeft + (width / 2)}px;
              transform: translate(-50%, -100%);
              ${Arrow} {
                transform: rotate(180deg);
              }
            `;

    case 'top-start':
      return `
              flex-direction: column-reverse;
              align-items: end;
              top: ${currentTop}px;
              left: ${currentLeft + ARROW_SIZE + ARROW_MARGIN + (width / 2)}px;
              transform: translate(-100%, -100%);
              ${Arrow} {
                transform: rotate(180deg);
                margin-right: ${ARROW_MARGIN}px;
              }
            `;

    // default case is 'bottom-center'
    default:
      return `
            flex-direction: column;
            top: ${currentTop + height}px;
            left: ${currentLeft + (width / 2)}px;
            transform: translateX(-50%);
            align-items: center;
          `;
  }
};

const getDynamicPosition = (coords: DOMRect, width?: number, height?: number): ITooltipPosition => {

  const isOverflowingRight = coords.left + (width || 0) + 30 > window.innerWidth;
  const isOverflowingBottom = coords.bottom + (height || 0) > window.innerHeight;
  const isOverflowingLeft = coords.left - (width || 0) < 0;
  const isOverflowingTop = coords.top - (height || 0) < 0;

  if (isOverflowingTop && isOverflowingRight && isOverflowingBottom) {
    return 'left-center';
  }

  if (isOverflowingTop && isOverflowingLeft && isOverflowingBottom) {
    return 'right-center';
  }

  if (isOverflowingTop && isOverflowingLeft) {
    return 'bottom-end';
  }

  if (isOverflowingTop && isOverflowingRight) {
    return 'bottom-start';
  }

  if (isOverflowingBottom && isOverflowingLeft) {
    return 'top-end';
  }

  if (isOverflowingBottom && isOverflowingRight) {
    return 'top-start';
  }

  if (isOverflowingLeft) {
    return 'right-center';
  }

  if (isOverflowingRight) {
    return 'left-center';
  }

  if (isOverflowingBottom) {
    return 'top-center';
  }

  return 'bottom-center';
};

type ITooltip = {
  message: string
  tooltipFor: string
  icon?: string
  type?: ITooltipType
  tooltipPosition?: ITooltipPosition
  maxWidth?: string
}

export type ITooltipPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left-start' | 'left-center' | 'left-end' | 'right-start' | 'right-center' | 'right-end';

const Tooltip: React.FC<ITooltip> = ({ icon, message, type, tooltipFor, tooltipPosition, maxWidth }) => {

  const [coords, setCoords] = useState<DOMRect | null>(null);
  const [visible, setVisible] = useState(false);
  const [dynamicPosition, setDynamicPosition] = useState<ITooltipPosition>('top-center');
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = useCallback(() => {
    const element = document.getElementById(tooltipFor);
    if (element) {
      const rect = element.getBoundingClientRect();
      setCoords(rect);
      setVisible(true);
      setDynamicPosition(getDynamicPosition(rect, tooltipRef.current?.offsetWidth, tooltipRef.current?.offsetHeight));
    }
  }, [tooltipFor]);

  const handleMouseOut = useCallback(() => {
    setVisible(false);
  }, []);

  const updateCoords = useCallback(() => {
    const element = document.getElementById(tooltipFor);
    if (element) {
      const rect = element.getBoundingClientRect();
      setCoords(rect);
    }
  }, [tooltipFor]);

  useEffect(() => {
    const element = document.getElementById(tooltipFor);
    if (!element) { return; }
    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);
    updateCoords();

    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseOut, handleMouseOver, tooltipFor, updateCoords]);

  if (!visible || !coords) return null;

  return ReactDOM.createPortal(
    <TooltipWrapper ref={tooltipRef} maxWidth={maxWidth} directionStyle={getDirectionStyle(tooltipPosition || dynamicPosition, coords)}>
      <Arrow type={type || 'neutral'} />
      <MessageWrapper type={type || 'neutral'}>
        {icon && <Icon icon={icon} size={16} color='white-a12' />}
        {message}
      </MessageWrapper>
    </TooltipWrapper>,
    document.body
  );
};

export default Tooltip;