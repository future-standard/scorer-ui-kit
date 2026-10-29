import type { Meta, StoryObj } from '@storybook/react-vite';
import { IntroductionText } from 'scorer-ui-kit';

const meta = {
  title: 'Pages/atoms/IntroductionText',
  component: IntroductionText,
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'Text', control: 'text' },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.',
  },
} satisfies Meta<typeof IntroductionText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
