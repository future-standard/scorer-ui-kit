import React, { ReactElement, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const TooltipText = styled.span<{width?: string}>`
  visibility: hidden;
  padding: 5px;
  font-size: 10px;
  color: #000000;
  line-height: 1.5;
  text-align: left;
  border: 1px solid hsl(195deg 5% 60% / 72%);
  box-shadow: 2px 2px 4px hsl(195deg 16% 72% / 72%);
  background-color: #ffffff;
  outline: none !important;
  position: absolute;
  top: 222%;
  left: 12px;
  z-index: 1;
  width: ${({ width }) => width ? (parseInt(width) * 1.5)+'px' : '120px'};
`;

const Container = styled.div<{width?: string}>`
  width: ${({ width }) => width ? width+'px' : '80px'};
`;

const ProgressBar = styled.div<{height?: string}>`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  background: #ddd;
  height: ${({height}) => height ? height : '5px'};
  border-radius: 5px;
  > div:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  > div:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px
  }
`;

const Bar = styled.div`
  box-sizing: border-box;
  flex: 1;
  height: inherit;
  position: relative;
  &:hover ${TooltipText} {
    visibility: visible;
  }
`;

const CompletedBar = styled(Bar)`
  border: 1px solid #4DB5FF;
  background: #4DB5FF;
`;

const FailedBar = styled(Bar)`
  border: 1px solid #EF7878;
  background: #EF7878;
  cursor: pointer;
`;

const barberpole = keyframes`
  0% {
    background-position: 100px 100px;
  }
  100% {
    background-position: 300px 300px;
  }
`;

const ProcessingBar = styled(Bar)`
  border: 1px solid #9BD3FA;
  background: repeating-linear-gradient(
    -45deg,
    #9BD3FA,
    #9BD3FA 7px,
    #4DB5FF 5px,
    #4DB5FF 10px
  );
  background-size: 400px 400px;
  animation: ${barberpole} 20s linear infinite;
`;

const ProgressBarText = styled.div`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.data };
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

  const renderSegmentsConditionally = useCallback((item: ISegments):ReactElement => {
    if(item.status === 'completed') {
      return <CompletedBar><TooltipText width={width}>{item.displayText}</TooltipText></CompletedBar>;
    } else if(item.status === 'failed') {
      return <FailedBar><TooltipText width={width}>{item.displayText}</TooltipText></FailedBar>;
    } else if(item.status === 'processing') {
      return <ProcessingBar><TooltipText width={width}>{item.displayText}</TooltipText></ProcessingBar>;
    } else {
      return <Bar><TooltipText width={width}>{item.displayText}</TooltipText></Bar>;
    }
  },[width]);

  return (
    <Container width={width}>
      <ProgressBarText>{statusText}</ProgressBarText>
      <ProgressBar height={height}>{statusSegments?.map((item) => {return renderSegmentsConditionally(item);})}</ProgressBar>
    </Container>
  );
};

export default SegmentedProgressBar;