import { boolean, number, select, text } from '@storybook/addon-knobs';
import { ButtonWithIcon } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';
import { generateIconList } from '../../helpers';

const Panel = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}px;
  box-sizing: border-box;
  padding: 24px 16px;
  border: 1px solid var(--grey-6);
  border-radius: 3px;
  background-color: var(--grey-2);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PanelTitle = styled.h2`
  margin: 0 0 16px;
  font-family: var(--font-ui);
  font-size: 18px;
  font-weight: 500;
  color: var(--grey-12);
`;

const designOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Danger: 'danger',
  TextOnly: 'text-only',
  Outline: 'outline',
} as const;

const sizeOptions = { Xsmall: 'xsmall', Small: 'small', Normal: 'normal', Large: 'large' } as const;

const ButtonWithIconsStory = {
  title: 'Form/Buttons',
  component: ButtonWithIcon,
  decorators: [],
};

export const _WithIcon = () => {
  const iconList = generateIconList();

  const buttonText = text('Button Text', 'Example Title');
  const buttonDesign = select('Design', designOptions, 'primary');
  const buttonSize = select('Size', sizeOptions, 'normal');
  const buttonDisabled = boolean('Disabled', false);
  const buttonIcon = select('Icon', iconList, Object.keys(iconList)[0]);
  const buttonIconPosition = select('Icon Position', { Left: 'left', Right: 'right' }, 'right');
  const buttonLoading = boolean('Loading', false);
  const buttonShadow = boolean('Shadow', false);
  const buttonOnClick = action('button-click');

  return (
    <ButtonWithIcon
      design={buttonDesign}
      size={buttonSize}
      shadow={buttonShadow}
      onClick={buttonOnClick}
      icon={buttonIcon}
      position={buttonIconPosition}
      disabled={buttonDisabled}
      loading={buttonLoading}
    >
      {buttonText}
    </ButtonWithIcon>
  );
};

export const _WithIconFullWidth = () => {
  const containerWidth = number('Container Width', 320);
  const panelTitle = text('Panel Title', 'Save current work');
  const buttons = [
    {
      id: 'save',
      icon: 'Success',
      design: 'primary',
      label: text('Button 1 Text', 'Save changes'),
    },
    {
      id: 'discard',
      icon: 'Warning',
      design: 'warning',
      label: text('Button 2 Text', 'Discard changes'),
    },
    { id: 'cancel', icon: 'Invalid', design: 'secondary', label: text('Button 3 Text', 'Cancel') },
  ] as const;
  const buttonSize = select('Size', sizeOptions, 'normal');
  const buttonIconPosition = select('Icon Position', { Left: 'left', Right: 'right' }, 'left');
  const buttonOnClick = action('button-click');

  return (
    <Panel $width={containerWidth}>
      <PanelTitle>{panelTitle}</PanelTitle>
      {buttons.map(({ id, icon, design, label }) => (
        <ButtonWithIcon
          key={id}
          design={design}
          size={buttonSize}
          onClick={buttonOnClick}
          icon={icon}
          position={buttonIconPosition}
          isFullWidth
        >
          {label}
        </ButtonWithIcon>
      ))}
    </Panel>
  );
};

export default ButtonWithIconsStory;
