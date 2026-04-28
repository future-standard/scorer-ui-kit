import { boolean, select, text } from '@storybook/addon-knobs';
import { Button } from 'scorer-ui-kit';
import { action } from 'storybook/actions';

const ButtonStory = {
  title: 'Form/Buttons',
  component: Button,
  decorators: [],
};

export const StandardButton = () => {
  const buttonText = text('Button Text', 'Example Title');
  const buttonDesign = select(
    'Design',
    {
      Primary: 'primary',
      Secondary: 'secondary',
      Danger: 'danger',
      TextOnly: 'text-only',
      Outline: 'outline',
    },
    'primary'
  );
  const buttonSize = select(
    'Size',
    { Xsmall: 'xsmall', Small: 'small', Normal: 'normal', Large: 'large' },
    'normal'
  );
  const buttonDisabled = boolean('Disabled', false);
  const buttonShadow = boolean('Shadow', false);
  const buttonOnClick = action('button-click');

  return (
    <Button
      design={buttonDesign}
      size={buttonSize}
      shadow={buttonShadow}
      onClick={buttonOnClick}
      disabled={buttonDisabled}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonStory;
