import React, { ReactElement, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div<{width?: string}>`
  width: ${({ width }) => width ? width : '120px'};
`;

const ProgressBar = styled.div<{height?: string}>`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  background: #ddd;
  height: ${({height}) => height ? height : '6px'};
  border-radius: 5px;
  overflow: hidden;
`;

const CompletedFailedBar = styled.div<{status: string}>`
  box-sizing: border-box;
  flex: 1;
  height: inherit;
  border: 1px solid;
  border-color: ${({status})=> status === 'completed' ? '#4DB5FF': '#EF7878'};
  border-left: none;
  border-right: none;
  background: ${({status})=> status === 'completed' ? '#4DB5FF': '#EF7878'};
`;

const ProgressBarText = styled.div`
  margin-bottom: 3px;
`;

const barberpole = keyframes`
  0% {
    background-position: 100px 100px;
  }
  100% {
    background-position: 300px 300px;
  }
`;

const ProcessingBar = styled.div`
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
  animation: ${barberpole} 20s linear infinite;
`;

const EmptyBar = styled.div`
  box-sizing: border-box;
  flex: 1;
  height: inherit;
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
    if(item.status === 'completed' || item.status === 'failed') {
      return <CompletedFailedBar status={item.status} title={item.displayText} />;
    }
    else if(item.status === 'processing') {
      return <ProcessingBar title={item.displayText} />;
    }
    else {
      return <EmptyBar title={item.displayText} />;
    }
  },[]);
  
  return (
    <Container width={width}>
      <ProgressBarText>{statusText}</ProgressBarText>
      <ProgressBar height={height}>{statusSegments?.map((item) => {return renderSegmentsConditionally(item);})}</ProgressBar>
    </Container>
  );
};

export default SegmentedProgressBar;