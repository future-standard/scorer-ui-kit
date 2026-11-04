import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ToggleButton } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const layoutOptions = [
  { text: 'Grid', value: 'grid', icon: 'LayoutGrid' },
  { text: 'List', value: 'list', icon: 'LayoutList' },
];

const CameraData = styled.div``;
const Camera = styled.li``;

const DataGroup = styled.ol<{ $layout: string }>`
  margin-top: 20px;
  display: grid;
  ${({ $layout }) =>
    $layout === 'grid' &&
    `
      list-style-type: none;
      grid-template-columns: repeat(3, 300px);
      gap: 16px;
        ${Camera} {
          padding: 100px 20px;
          border: 1px solid var(--grey-9);
          text-align: center;
        }
    `};
`;

const StatusSpan = styled.span<{ $isOnline?: boolean }>`
    ${({ $isOnline }) =>
      $isOnline
        ? `
      color: var(--success);
    `
        : `
      color: var(--warning);
    `}
  `;

const CAMERAS = [
  { name: 'Camera01', online: true },
  { name: 'Camera02', online: true },
  { name: 'Camera03', online: false },
  { name: 'Camera04', online: false },
  { name: 'Camera05', online: false },
  { name: 'Camera06', online: false },
  { name: 'Camera07', online: true },
  { name: 'Camera08', online: true },
  { name: 'Camera09', online: false },
];

// `disabled` is not in the ToggleButton props, but the component forwards unknown props to its
// FilterButton, so the control still disables the button.
type Args = ComponentProps<typeof ToggleButton> & { disabled: boolean };

const meta = {
  title: 'Filters/atoms/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  argTypes: {
    design: { control: 'select' },
    selectedIndex: { control: 'select', options: [0, 1] },
  },
  args: {
    categoryLabel: 'Layout',
    options: layoutOptions,
    selectedIndex: 0,
    design: 'basic',
    disabled: false,
    onToggle: fn(),
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [{ selectedIndex }, updateArgs] = useArgs<Args>();

    const onToggle = (index: number, value: string | number) => {
      args.onToggle(index, value);
      updateArgs({ selectedIndex: index });
    };

    return (
      <div>
        <ToggleButton {...args} selectedIndex={selectedIndex} onToggle={onToggle} />
        <DataGroup $layout={String(args.options[selectedIndex]?.value)}>
          {CAMERAS.map(({ name, online }) => (
            <Camera key={name}>
              <CameraData>
                {name} - <StatusSpan $isOnline={online}>{online ? 'Online' : 'OffLine'}</StatusSpan>
              </CameraData>
            </Camera>
          ))}
        </DataGroup>
      </div>
    );
  },
};
