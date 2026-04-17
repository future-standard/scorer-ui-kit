import { boolean, select, text } from '@storybook/addon-knobs';
import { useEffect } from 'react';
import { TextField } from 'scorer-ui-kit';
import styled from 'styled-components';

const Container = styled.div`
    margin: 20px;
`;

const InputStory = {
  title: 'Form/Input',
  component: TextField,
  decorators: [],
};

export const TextInput = () => {
  const language = select('Language', { English: 'en', Japanese: 'ja' }, 'ja');
  const inputName = text('Input Name', 'my_input');
  const inputLabel = text('Label', 'My Input');
  const showFeedback = boolean('Show Feedback', false);
  const inputFeedback = text('Input Feedback', 'This is a feedback message.');
  const inputPlaceholder = text('Placeholder', 'Placeholder...');
  const inputState = select(
    'State',
    {
      Default: 'default',
      Disabled: 'disabled',
      Required: 'required',
      Valid: 'valid',
      Invalid: 'invalid',
      Processing: 'processing',
    },
    'default'
  );
  const fieldRequired = boolean('Required', false);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <Container>
      <TextField
        id={inputName}
        name={inputName}
        label={inputLabel}
        placeholder={inputPlaceholder}
        fieldState={inputState}
        showFeedback={showFeedback}
        feedbackMessage={inputFeedback}
        required={fieldRequired}
      />
    </Container>
  );
};

export default InputStory;
