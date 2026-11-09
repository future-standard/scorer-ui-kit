import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { type ISplitButtonProps, ModalProvider, SplitButton, useModal } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const onMainActionClick = fn();
const onRandomActionClick = fn();
const onSaveActionClick = fn();
const onDownloadActionClick = fn();

const buttonList: ISplitButtonProps['buttonList'] = [
  { id: 'a0', text: 'Main Action Open Modal', icon: 'Success', onClickCallback: onMainActionClick },
  { id: 'a1', text: '日本語の場合はランダム', onClickCallback: onRandomActionClick },
  {
    id: 'a2',
    text: 'Save Action',
    icon: 'Analyse',
    hasOnSelectLoading: true,
    onClickCallback: onSaveActionClick,
  },
  {
    id: 'a3',
    text: 'Download Action',
    icon: 'Download',
    onClickCallback: onDownloadActionClick,
    disabled: true,
  },
];

type Args = ComponentProps<typeof SplitButton> & {
  onMainActionClick: () => void;
  onRandomActionClick: () => void;
  onSaveActionClick: () => void;
  onDownloadActionClick: () => void;
};

// The main action also opens a modal, which needs the hook, so the list is finished in a component.
const SplitButtonWithModal = ({
  onMainActionClick: _m,
  onRandomActionClick: _r,
  onSaveActionClick: _s,
  onDownloadActionClick: _d,
  ...args
}: Args) => {
  const { createModal } = useModal();

  const list = args.buttonList.map((item) =>
    item.id === args.mainButtonId
      ? {
          ...item,
          onClickCallback: () => {
            item.onClickCallback?.();
            createModal({
              customComponent: <h1>Main Action Modal</h1>,
              padding: true,
              width: 'auto',
            });
          },
        }
      : item
  );

  return <SplitButton {...args} buttonList={list} />;
};

const meta = {
  title: 'Form/Buttons/SplitButton',
  component: SplitButton,
  decorators: [
    // room below the button so the open list is not cropped by the docs canvas
    (Story) => (
      <ModalProvider>
        <div style={{ paddingBottom: '200px' }}>
          <Story />
        </div>
      </ModalProvider>
    ),
  ],
  argTypes: {
    mainButtonId: { control: 'select', options: buttonList.map((item) => item.id) },
    design: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'danger', 'text-only', 'outline', 'custom'],
    },
    size: { control: 'select' },
    // SplitButton never reads isSortAscending; it reaches the DOM with the other rest props.
    isSortAscending: {
      control: false,
      table: { defaultValue: { summary: 'unused by the component' } },
    },
  },
  args: {
    mainButtonId: 'a0',
    buttonList,
    design: 'primary',
    size: 'normal',
    disabled: false,
    textMaxWidth: '',
    onMainActionClick,
    onRandomActionClick,
    onSaveActionClick,
    onDownloadActionClick,
  },
  render: (args) => (
    <SplitButtonWithModal {...args} textMaxWidth={args.textMaxWidth || undefined} />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
