import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{width?: string}>`
  width: ${({ width }) => width ? width : '120px'};
`;

const TooltipText = styled.span`
  visibility: hidden;
  padding: 5px;
  font-size: 10px;
  line-height: 1.2;
  text-align: left;
  border: 1px solid hsl(195deg 5% 60% / 72%);
  box-shadow: 2px 2px 4px hsl(195deg 16% 72% / 72%);
  background-color: #f8f9fa;
  outline: none !important;
  position: absolute;
  top: -750%;
  left: -12px;
  z-index: 1;
  width: 215px;
`;

const ProgressBar = styled.div<{height?: string}>`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  background: #ddd;
  height: ${({height}) => height ? height : '6px'};
  border-radius: 5px;
`;

const CompletedFailedBar = styled.div<{status: string}>`
  position: relative;
  &:hover ${TooltipText} {
    visibility: visible;
  }
  box-sizing: border-box;
  flex: 1;
  height: inherit;
  border: ${({status})=> status === 'completed' ? '1px solid #4DB5FF': '1px solid #EF7878'};
  border-left: none;
  border-right: none;
  background: ${({status})=> status === 'completed' ? '#4DB5FF': '#EF7878'};
`;

const ProgressBarText = styled.div``;

const ProcessingBar = styled.div`
  position: relative;
  &:hover ${TooltipText} {
    visibility: visible;
  }
  box-sizing: border-box;
  flex: 1;
  height: inherit;
  border: 1px solid #9BD3FA;  
  border-right:none;
  background: repeating-linear-gradient(
    -45deg,
    #9BD3FA,
    #9BD3FA 7px,
    #4DB5FF 5px,
    #4DB5FF 10px
  );
  background-size: 400px 400px;
  animation: barberpole 20s linear infinite;
`;

const EmptyBar = styled.div`
  position: relative;
  &:hover ${TooltipText} {
    visibility: visible;
  }
  box-sizing: border-box;
  flex: 1;
  height: inherit;
  border: 1px solid #DDD;
`;

interface ISegments {
  status: string;
  displayText: string;
}

interface ISegmentedProgressBarProps {
  statusSegments?: ISegments[];
  statusText?: string;
  width?: string;
  height?: string;
}

const SegmentedProgressBar: React.FC<ISegmentedProgressBarProps> = ({ statusSegments, statusText, width, height }) => {
  
  return (
    <Container width={width}>
      <ProgressBarText>{statusText}</ProgressBarText>
      <ProgressBar height={height}>
        {statusSegments?.map((item) => {
          return (
            item.status === 'completed' || item.status === 'failed' ? <CompletedFailedBar status={item.status}><TooltipText>{item.displayText}</TooltipText></CompletedFailedBar> :
              item.status === 'processing' ? <ProcessingBar><TooltipText>{item.displayText}</TooltipText></ProcessingBar> : <EmptyBar><TooltipText>{item.displayText}</TooltipText></EmptyBar>
          );
        })}
      </ProgressBar>
    </Container>
  );
};

export default SegmentedProgressBar;