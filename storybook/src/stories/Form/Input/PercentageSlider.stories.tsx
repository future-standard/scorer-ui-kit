import React from 'react';
// import { action } from '@storybook/addon-actions';
import { boolean, number, object, text} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import {PercentageSlider, ISliderMark, IFeedbackColor} from 'scorer-ui-kit';


export default {
  title: 'Form/Input',
  component: PercentageSlider,
  decorators: []
};

const Container = styled.div`
    margin: 20px;
    width: 268px;
`;

const exampleMarks : ISliderMark[] = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
    label:'100%',
  },
];
  
export const _PercentageSlider = () => {
  const title = text('Title', 'Duration');
  const disabled = boolean('Disabled', false);
  const defaultValue = number('Default value', 30);
  const customThumb = boolean("Custom colors function",false);
  const customTitle = boolean("Custom Title function",false);
  const showValue = action('Input Callback');
  const marks = object('Marks', exampleMarks);
  const showValueTitle = boolean("Show Value Title", false);

  // const step = number('Step', 1); // still fixing step option
  const handleUpdate = (value: number) => {
    console.log('updated value', value);
    showValue(`Returned value: ${value}`, value)
  };

  const otherColorHandler = (value: number)  : IFeedbackColor =>{
    if(value <= 20) {
      return 'neutral';
    }
  
    if((value > 20) && (value <= 80)) {
      return 'info';
    }
  
    return 'error';
  }

  const otherTitlesHandler = (value: number) : string => {
    if(value <= 20) {
      return 'Small sound';
    }
  
    if((value > 20) && (value <= 80)) {
      return 'Normal sound';
    }
  
    return 'Dangerous sound';
  }

  return (
    <Container>
      <PercentageSlider
          disabled={disabled}
          // step={step}
          inputCallback={handleUpdate}
          marks={marks}
          defaultValue={defaultValue}
          title={title}
          updateThumbColor={customThumb ? otherColorHandler : undefined }
          updateTitle={customTitle ? otherTitlesHandler : undefined}
          showValueTitle={showValueTitle}
        />
    </Container>
  )
}