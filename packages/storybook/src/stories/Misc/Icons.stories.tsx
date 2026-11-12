import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Icon } from 'scorer-ui-kit';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`;

type IconProps = ComponentProps<typeof Icon>;
type Args = IconProps & { showAll: boolean };

// `color` is an open string in the icon package, so docgen offers no options. Icon reads it as
// `var(--<color>)`: the six icon aliases from theme/variables/Colors.ts plus any palette step work.
const ICON_ALIASES = ['mono', 'dimmed', 'subtle', 'inverse', 'primary', 'danger'];
const PALETTE = [
  'primary',
  'secondary',
  'grey',
  'info',
  'success',
  'caution',
  'warning',
  'orange',
  'red',
  'green',
  'black',
  'white',
];
const colorOptions = [
  ...ICON_ALIASES,
  ...PALETTE.flatMap((name) => Array.from({ length: 12 }, (_, i) => `${name}-${i + 1}`)),
];

/**
 * Generate a grid of all the icons for easy browsing and hovering to find names.
 */
const generateIconGrid = (props: Omit<IconProps, 'icon'>) =>
  Object.keys(IconSVGs).map((iconName) => (
    <div title={iconName} key={iconName}>
      <Icon icon={iconName} {...props} />
    </div>
  ));

const IconSheet = ({ showAll, icon, ...sharedProps }: Args) => (
  <Container>
    {showAll ? <Grid>{generateIconGrid(sharedProps)}</Grid> : <Icon icon={icon} {...sharedProps} />}
  </Container>
);

const meta = {
  title: 'Misc/Icons',
  component: Icon,
  tags: ['!autodocs'],
  argTypes: {
    showAll: { name: 'Show all' },
    icon: { control: 'select', options: Object.keys(IconSVGs) },
    color: { control: 'select', options: colorOptions },
    weight: { control: 'select' },
  },
  args: {
    showAll: false,
    icon: 'ActionPause',
    color: 'mono',
    weight: 'regular',
    size: 24,
    forSvgUsage: false,
  },
  render: (args) => <IconSheet {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
