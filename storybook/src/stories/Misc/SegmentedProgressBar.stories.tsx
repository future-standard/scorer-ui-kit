import React from 'react';
import styled from 'styled-components';
import { text, object } from "@storybook/addon-knobs";
import { SegmentedProgressBar } from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px;
`;

export default {
    title: 'Misc',
    component: SegmentedProgressBar,
    decorators: []
};

const segments = [{ 'status': 'completed', 'displayText': 'Job Id: 11, Started at: 2023-02-22 11.00am'}, {'status':'failed', 'displayText': 'Job Id: 10, Started at: 2023-02-23 10.00am'}, {'status':'processing', 'displayText': 'Job Id: 12, Started at: 2023-01-03 12.00am'}, {'status':'', 'displayText': 'Job Id: 13, Started at: 2023-02-23 11.20am'} ];

export const SegmentedProgress = () => {
    const statusText = text("Message", 'Processing');
    const statusSegments = object('Status segments', segments);
    const width = text("width", '');
    const height = text("height", '');
  
  return <Container><SegmentedProgressBar {...{statusText, statusSegments, width, height}} /></Container>;
};
