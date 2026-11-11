import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type IModal, useModal } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const customComponentExample = <h1>Hello!</h1>;

type Args = IModal & { showCustomComponent: boolean };

const OpenModalButton = ({ showCustomComponent, ...modal }: Args) => {
  const { createModal } = useModal();

  const openModal = () => {
    createModal({
      ...modal,
      customComponent: showCustomComponent ? customComponentExample : undefined,
    });
  };

  return (
    <Button design='secondary' onClick={openModal}>
      Base Modal
    </Button>
  );
};

const meta = {
  title: 'Alerts/Modals/BaseModal',
  parameters: {
    docs: {
      description: {
        component:
          'Demonstrates the useModal() hook: the button calls `createModal()` with these args, so the modal shows the close text, padding and optional custom component you set.',
      },
    },
  },
  argTypes: {
    showCustomComponent: { name: 'Show custom component' },
    customComponent: {
      control: false,
      table: { defaultValue: { summary: '<h1>Hello!</h1> while "Show custom component" is on' } },
    },
  },
  args: {
    closeText: 'Close',
    isCloseEnable: true,
    padding: true,
    width: '',
    showCustomComponent: false,
    dismissCallback: fn(),
  },
  render: (args) => <OpenModalButton {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
