import React from "react";
import styled, { css } from "styled-components";

export type TResizeLineStates = 'default' | 'arrow';
export type TResizeLineLayouts = 'horizontal' | 'vertical';
export type TResizeLineDirection = 'up' | 'down' | 'left' | 'right' | undefined;

const Inner = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex: 0 0 200px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Line  = styled.div`
  background: var(--grey-10);
  flex: 1;
`;

const IconContainer = styled.div`
  flex: 0 0 20px;
  svg {
    path {
      stroke: var(--grey-11);
    }
  }
`;

const IconDefault = styled.svg<{$layout: TResizeLineLayouts}>`
  transform: ${({$layout}) => $layout === 'horizontal' ? 'rotate(0deg)' : 'rotate(90deg)'};
`;

const IconArrow = styled.svg<{$direction?: TResizeLineDirection}>`
  transform: rotate(0deg);
  ${({$direction}) => {
    switch($direction){
      case 'up':
        return 'transform: rotate(-90deg);';
      case 'down':
        return 'transform: rotate(90deg);';
      case 'left':
        return 'transform: rotate(180deg);';
      case 'right':
      default:
        return 'transform: rotate(0deg);';
    }
  }};
`;


const Container = styled.div<{$layout: TResizeLineLayouts}>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({$layout}) => $layout === 'horizontal' ? css`
    width: 16px;
    flex-direction: column;
    ${Inner}{
      flex-direction: column;
    }

    ${Line}{
      width: 1px;
    }

  ` : css`
      height: 16px;
      flex-direction: row;
      ${Inner}{
        flex-direction: row;
      }
      ${Line}{
        height: 1px;
      }
  `}
`;

interface IResizeLineProps {
  state?: 'default' | 'arrow';
  layout?: TResizeLineLayouts;
  arrowDirection?: TResizeLineDirection;
}

const ResizeLine : React.FC<IResizeLineProps> = ({state = 'default', layout = 'horizontal', arrowDirection}) => {
  return (
    <Container $layout={layout}>
      <Inner>
        <Line />
        <IconContainer>
          {state === 'default' ? 
            <IconDefault $layout={layout} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 14.875V5.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14.875V5.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 14.875L7 5.125" strokeLinecap="round" strokeLinejoin="round"/>
            </IconDefault>
          : 
            <IconArrow $direction={arrowDirection} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.25 4.375L12.61 9.735C12.6803 9.80525 12.7199 9.90058 12.7199 10C12.7199 10.0994 12.6803 10.1948 12.61 10.265L7.25 15.625" stroke="#9BA1A6" strokeLinecap="round" strokeLinejoin="round"/>
            </IconArrow>
          }          
        </IconContainer>
        <Line />
      </Inner>
    </Container>
  );
};

export default ResizeLine;