import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContentLayout, ModalProvider } from 'scorer-ui-kit';
import { pageFrame } from '../../helpers/PageFrame';
import MultiActionsExample from './MultiActionsExample';

const meta = {
  title: 'Tables/molecules/TableMultiActions',
  component: MultiActionsExample,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', pageFrame: { docsHeight: '900px' } },
  // the first decorator is the innermost one, so the page frame goes last
  decorators: [
    (Story) => (
      <ModalProvider>
        <ContentLayout>
          <Story />
        </ContentLayout>
      </ModalProvider>
    ),
    pageFrame,
  ],
  argTypes: {
    language: { control: 'select', options: ['english', 'japanese'] },
    actionsLayout: { control: 'select' },
  },
  args: {
    language: 'japanese',
    actionsLayout: 'inline',
  },
} satisfies Meta<typeof MultiActionsExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
