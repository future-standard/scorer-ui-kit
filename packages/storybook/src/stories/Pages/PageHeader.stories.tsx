import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import {
  ButtonsStack,
  ContentLayout,
  type IButtonStack,
  type IHeaderTag,
  Label,
  PageHeader,
  Switch,
} from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import { pageFrame } from '../helpers/PageFrame';

const onEditTagClick = fn();

const defaultTags: IHeaderTag[] = [
  { label: 'Shop A', icon: 'MetaCategories', linkTo: '/' },
  { label: 'Example', icon: 'MetaTags' },
  { label: 'Smart', icon: 'MetaTags' },
  { label: 'Shop B', icon: 'MetaCategories' },
  { label: 'Example', icon: 'MetaTags' },
  { label: 'Smart', icon: 'MetaTags' },
  { label: 'Shop C', icon: 'MetaCategories' },
  { label: 'Example', icon: 'MetaTags' },
  { label: 'Smart', icon: 'MetaTags' },
  { label: 'Edit', icon: 'Edit', onTagClick: onEditTagClick },
];

const defaultButtons: IButtonStack[] = [
  { id: 'primaryBase0', buttonType: 'default', text: 'Example Action 1' },
  { id: 'secondaryBase1', buttonType: 'default', text: 'Example Action 2', design: 'secondary' },
  {
    id: 'buttonWithIcon2',
    buttonType: 'icon-button',
    text: 'Delete Instance',
    design: 'danger',
    icon: 'DevicesScorerEdge',
  },
];

type Args = ComponentProps<typeof PageHeader> & {
  showTags: boolean;
  showButtons: boolean;
  buttons: IButtonStack[];
  showBottomLeftContent: boolean;
  withAreaClick: boolean;
  onEditTagClick: () => void;
};

const meta = {
  title: 'Pages/molecules/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  // The title icon hangs 44px into the left gutter, so the header needs ContentLayout's padding
  // around it; the first decorator is the innermost one, so the page frame goes last.
  decorators: [
    (Story) => (
      <ContentLayout>
        <Story />
      </ContentLayout>
    ),
    pageFrame,
  ],
  argTypes: {
    icon: { control: 'select', options: ['', ...Object.keys(IconSVGs)] },
    iconColor: {
      control: 'select',
      options: ['primary-9', 'mono', 'dimmed', 'subtle', 'inverse', 'primary', 'danger'],
    },
    showTags: { name: 'Show tags' },
    showButtons: { name: 'Show buttons' },
    buttons: { name: 'Buttons stack' },
    showBottomLeftContent: { name: 'Show bottom left content' },
    withAreaClick: { name: 'Area title as button (onAreaClick)' },
    rightContent: {
      control: false,
      table: { defaultValue: { summary: 'ButtonsStack built from the Buttons stack arg' } },
    },
    bottomLeftContent: {
      control: false,
      table: {
        defaultValue: { summary: 'Label with a Switch when Show bottom left content is on' },
      },
    },
  },
  args: {
    title: 'My Page Title',
    areaTitle: 'Area Name',
    areaHref: '#',
    icon: 'Link',
    iconColor: 'primary-9',
    introductionText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.',
    updateDocTitle: true,
    hideAreaInDocTitle: false,
    areaTitleBottom: false,
    tagList: defaultTags,
    showTags: true,
    buttons: defaultButtons,
    showButtons: true,
    showBottomLeftContent: false,
    withAreaClick: false,
    onAreaClick: fn(),
    onEditTagClick,
  },
  render: ({ showTags, showButtons, buttons, showBottomLeftContent, withAreaClick, ...args }) => (
    <PageHeader
      {...args}
      onAreaClick={withAreaClick ? args.onAreaClick : undefined}
      tagList={showTags ? args.tagList : undefined}
      rightContent={showButtons ? <ButtonsStack buttons={buttons} /> : undefined}
      bottomLeftContent={
        showBottomLeftContent ? (
          <Label htmlFor='id-switch' labelText='Enable' direction='row'>
            <Switch key='id-switch' />
          </Label>
        ) : undefined
      }
    />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
