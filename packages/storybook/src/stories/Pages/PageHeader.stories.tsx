import { boolean, object, select, text } from '@storybook/addon-knobs';
import {
  ButtonsStack,
  type IButtonStack,
  type IHeaderTag,
  Label,
  PageHeader,
  Switch,
} from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';
import { generateIconList } from '../helpers';

const Container = styled.div`
  margin: 100px;
`;

const PageHeaderStory = {
  title: 'Pages/molecules',
  component: PageHeader,
  decorators: [],
};

const defaultTags: IHeaderTag[] = [
  {
    label: 'Shop A',
    icon: 'MetaCategories',
    linkTo: '/',
  },
  {
    label: 'Example',
    icon: 'MetaTags',
  },
  {
    label: 'Smart',
    icon: 'MetaTags',
  },
  {
    label: 'Shop B',
    icon: 'MetaCategories',
  },
  {
    label: 'Example',
    icon: 'MetaTags',
  },
  {
    label: 'Smart',
    icon: 'MetaTags',
  },
  {
    label: 'Shop C',
    icon: 'MetaCategories',
  },
  {
    label: 'Example',
    icon: 'MetaTags',
  },
  {
    label: 'Smart',
    icon: 'MetaTags',
  },
  {
    label: 'Edit',
    icon: 'Edit',
    onTagClick: action('Edit tag clicked'),
  },
];

const defaultBtn: IButtonStack[] = [
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

const buttonStackPresets: Record<string, IButtonStack[]> = {
  Default: defaultBtn,
  'Icons on the left': leftIconStack,
  'Icons on the right': rightIconStack,
  Mixed: mixedStack,
};

export const _PageHeader = () => {
  const iconList = Object.assign({ None: null }, generateIconList());

  const pageTitle = text('Page Title', 'My Page Title');
  const pageAreaText = text('Page Area', 'Area Name');
  const pageAreaHref = text('Page Area Href', '#');
  const pageIcon = select('Icon', iconList, 'Link');
  const pageIconColor = select(
    'Icon Color',
    {
      Mono: 'mono',
      Dimmed: 'dimmed',
      Subtle: 'subtle',
      Inverse: 'inverse',
      Primary: 'primary',
      Danger: 'danger',
      Undefined: undefined,
    },
    undefined
  );
  const updateDocTitle = boolean('Update Doc Title', true);
  const noTagsExample = boolean('No tags Example', false);
  const areaTitleBottom = boolean('Area Title Bottom', false);
  const noButtonsExample = boolean('No Buttons Example', false);
  const noIconExample = boolean('No Icon', false);
  const customClick = action('Custom onAreaClick was used');
  const optionalAreaOnclick = boolean('Example with area on Click', false);
  const hasBottomLeftContent = boolean('Has Bottom Left Bottom', false);

  const buttonStackPreset = select(
    'Buttons Stack Preset',
    Object.keys(buttonStackPresets),
    'Default'
  );
  const introductionText = text(
    'Text',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.'
  );
  const buttonList = object(
    `Buttons Stack (${buttonStackPreset})`,
    buttonStackPresets[buttonStackPreset]
  );
  const tagList = object('Tag List', defaultTags);
  if (updateDocTitle) {
    console.info(
      'Note: Updating document.title in Storybook has no effect though it should work in projects.'
    );
  }

  return (
    <Container>
      <PageHeader
        icon={noIconExample ? undefined : pageIcon || undefined}
        iconColor={pageIconColor}
        introductionText={introductionText}
        title={pageTitle}
        areaTitle={pageAreaText}
        areaHref={pageAreaHref}
        onAreaClick={optionalAreaOnclick ? customClick : undefined}
        updateDocTitle={updateDocTitle}
        tagList={noTagsExample ? undefined : tagList}
        rightContent={noButtonsExample ? undefined : <ButtonsStack buttons={buttonList} />}
        areaTitleBottom={areaTitleBottom}
        bottomLeftContent={
          hasBottomLeftContent ? (
            <Label htmlFor='id-switch' labelText='Enable' direction='row'>
              <Switch key='id-switch'></Switch>
            </Label>
          ) : undefined
        }
      />
    </Container>
  );
};

export default PageHeaderStory;
