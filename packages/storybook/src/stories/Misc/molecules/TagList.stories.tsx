import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ITag, TagList } from 'scorer-ui-kit';
import styled from 'styled-components';

const Container = styled.div`
  font-family: ${(p) => p.theme.fontFamily.data};
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 300px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`;

const defaultTags: ITag[] = [
  {
    label: 'Shop A',
    icon: 'MetaCategories',
  },
  {
    label: 'Example',
    icon: 'MetaTags',
    color: 'primary',
  },
  {
    label: 'Smart',
    icon: 'MetaTags',
  },
];

const meta = {
  title: 'Misc/molecules/TagList',
  component: TagList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  args: {
    tagsConfig: defaultTags,
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
