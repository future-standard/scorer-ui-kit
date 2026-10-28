import {
  ArgTypes,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs/blocks';

/* Docs page for components that portal to document.body (MainMenu, TopBar): an inline preview
   would show them at the page's edge, so the stories are embedded in their own frames
   (parameters.docs.story.inline false) and the props come as a static table. Live docs controls
   could not reach a framed story, which has its own args store, and a table that looks live but
   does nothing is worse than one that is plainly static. The Default story is the playground. */
export const FramedDocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <ArgTypes />
    <Stories includePrimary={false} />
  </>
);
