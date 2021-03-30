import React, { useState} from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, object } from "@storybook/addon-knobs";
import styled from 'styled-components';
import {SliderInput} from 'scorer-ui-kit';


export default {
  title: 'Form/Input',
  component: SliderInput,
  decorators: []
};

const Container = styled.div`
    margin: 20px;
    width: 500px;
`;


type IMylist = HTMLDataListElement;
  

export const _SliderInput = () => {
  const [value, setValue] = useState<number>();

  const disabled = boolean('Disabled', false);
  const maxValue = number('Max', 100);
  const minValue = number('Min', 0);
  const step = number('Step', 1);
  // const onChange = action('OnChange', value);

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    console.log('updated value', val);
    const numVal : number = parseInt(val, 10);
    setValue(numVal);
  };

  return (
    <Container>
      <SliderInput
          max={maxValue}
          min={minValue}
          disabled={disabled}
          step={step}
          list="exampleList"
          inputCallback={handleUpdate}
        />
        <datalist id="exampleList" >
          <option>0</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
          <option>100</option>
      </datalist>
    </Container>
  )
}