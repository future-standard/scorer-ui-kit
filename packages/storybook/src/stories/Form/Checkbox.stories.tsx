import { boolean } from '@storybook/addon-knobs';
import { Checkbox } from 'scorer-ui-kit';
import { action } from 'storybook/actions';

const CheckboxStory = {
  title: 'Form/atoms',
  component: Checkbox,
  decorators: [],
};

export const _Checkbox = () => {
  // const indeterminate = boolean("Indeterminate", false);
  const disabled = boolean('Disabled', false);
  const checked = boolean('Checked', false);
  const onChange = action('value-changed');

  return <Checkbox {...{ checked, disabled, onChange }} />;
};

export default CheckboxStory;
