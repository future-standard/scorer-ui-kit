import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useEffect, useRef } from 'react';
import {
  ButtonsStack,
  ContentLayout,
  type IButtonStack,
  type IHeaderTag,
  Label,
  PageHeader,
  Switch,
} from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
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

const leftIconStack: IButtonStack[] = [
  { id: 'newClip', buttonType: 'icon-button', text: 'New Clip', icon: 'Add', iconPosition: 'left' },
  {
    id: 'jobDetails',
    buttonType: 'icon-button',
    text: 'Job Details',
    design: 'secondary',
    icon: 'Time',
    iconPosition: 'left',
  },
];

const rightIconStack: IButtonStack[] = leftIconStack.map((button) => ({
  ...button,
  iconPosition: 'right',
}));

const mixedStack: IButtonStack[] = [
  { id: 'plainAction', buttonType: 'default', text: 'Example Action', design: 'secondary' },
  leftIconStack[0],
  rightIconStack[1],
];

const buttonStackPresets = {
  Default: defaultButtons,
  'Icons on the left': leftIconStack,
  'Icons on the right': rightIconStack,
  Mixed: mixedStack,
} satisfies Record<string, IButtonStack[]>;

type ButtonStackPreset = keyof typeof buttonStackPresets;

type Args = ComponentProps<typeof PageHeader> & {
  showTags: boolean;
  showButtons: boolean;
  buttonsPreset: ButtonStackPreset;
  buttons: IButtonStack[];
  showBottomLeftContent: boolean;
  withAreaClick: boolean;
  onEditTagClick: () => void;
};

const meta = {
  title: 'Pages/molecules/PageHeader',
  component: PageHeader,
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
    buttonsPreset: {
      name: 'Buttons stack preset',
      control: 'select',
      options: Object.keys(buttonStackPresets),
    },
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
    buttonsPreset: 'Default',
    buttons: defaultButtons,
    showButtons: true,
    showBottomLeftContent: false,
    withAreaClick: false,
    onAreaClick: fn(),
    onEditTagClick,
  },
  render: function Render({
    showTags,
    showButtons,
    buttonsPreset,
    buttons,
    showBottomLeftContent,
    withAreaClick,
    ...args
  }) {
    const [, updateArgs] = useArgs<Args>();
    const appliedPreset = useRef<ButtonStackPreset>('Default');

    // A new preset replaces the Buttons stack arg, so its object control shows what is rendered.
    // The ref starts at the preset the arg is built from, not at the current one, so a story
    // opened with another preset in its URL applies it too.
    useEffect(() => {
      if (appliedPreset.current === buttonsPreset) return;
      appliedPreset.current = buttonsPreset;
      updateArgs({ buttons: buttonStackPresets[buttonsPreset] });
    }, [buttonsPreset, updateArgs]);

    return (
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
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
