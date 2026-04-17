// import { action } from 'storybook/actions';
import { boolean, number, object } from '@storybook/addon-knobs';
import { type ISliderMark, SliderInput } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';

const SliderInputStory = {
  title: 'Form/Input',
  component: SliderInput,
  decorators: [],
};

const Container = styled.div`
    margin: 20px;
    width: 268px;
`;

const exampleMarks: ISliderMark[] = [
  {
    value: 1,
    label: '1H',
  },
  {
    value: 2,
    label: '2H',
  },
  {
    value: 3,
    label: '3H',
  },
  {
    value: 4,
    label: '4H',
  },
  {
    value: 5,
    label: '5H',
  },
  {
    value: 6,
    label: '6H',
  },
  {
    value: 7,
    label: '7H',
  },
  {
    value: 8,
    label: '8H',
  },
];

export const _SliderInput = () => {
  const disabled = boolean('Disabled', false);
  const maxValue = number('Max', 8);
  const minValue = number('Min', 1);
  const defaultValue = number('Default value', 6);
  const showValue = action('Input Callback');
  const marks = object('Marks', exampleMarks);
  const allMarkCentered = boolean('Center aligned end numbers', false);
  // const step = number('Step', 1); // still fixing step option

  const handleUpdate = (value: number) => {
    showValue(`Returned value: ${value}`, value);
  };

  return (
    <Container>
      <SliderInput
        max={maxValue}
        min={minValue}
        disabled={disabled}
        // step={step}
        inputCallback={handleUpdate}
        marks={marks}
        defaultValue={defaultValue}
        allMarkCentered={allMarkCentered}
      />
    </Container>
  );
};

export default SliderInputStory;
