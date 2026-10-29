import type { Meta, StoryObj } from '@storybook/react-vite';
import { type IMenuTop, Layout, MainMenu } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import logoMarkSvgRaw from '../assets/logo-mark.svg?raw';
import logoTextSvgRaw from '../assets/logo-text.svg?raw';
import { FramedDocsPage } from '../helpers/FramedDocsPage';

// base64 keeps the SVG source (quotes, #) valid inside the data URI
const logoMarkSvg = `data:image/svg+xml;base64,${btoa(logoMarkSvgRaw)}`;
const logoTextSvg = `data:image/svg+xml;base64,${btoa(logoTextSvgRaw)}`;

const menuContent: IMenuTop = {
  items: [
    { icon: 'Invalid', title: 'Basic Item', href: '#' },
    {
      icon: 'Detection',
      title: 'External Link',
      href: 'https://futurestandard.co.jp/',
      isExternalLink: true,
    },
    {
      icon: 'PasswordShow',
      title: 'With Children',
      href: '/',
      submenu: [
        { title: 'Child One', href: '/' },
        { title: 'Child Two', href: '#' },
        { title: 'Child Three', href: '#' },
        {
          title: 'Child with external link',
          href: 'https://www.google.com/',
          isExternalLink: true,
        },
      ],
    },
    {
      icon: 'Success',
      title: 'Grouped Children',
      href: '#',
      submenu: [
        { title: 'Subheader' },
        { title: 'Nested Child One', href: '#' },
        { title: 'Nested Child Two', href: '#' },
        { title: 'Nested Child Three', href: '#' },
        { title: 'Subheader Two' },
        { title: 'Nested Child Four', href: '#' },
        { title: 'Nested Child Five', href: '#' },
      ],
    },
  ],
};

const meta = {
  title: 'Global/MainMenu',
  component: MainMenu,
  tags: ['autodocs'],
  // The menu portals to document.body, so the docs preview needs its own frame (FramedDocsPage).
  parameters: {
    docs: {
      page: FramedDocsPage,
      story: { inline: false, iframeHeight: '600px' },
    },
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
  argTypes: {
    openWidth: { control: false, table: { defaultValue: { summary: 'unused by the component' } } },
  },
  args: {
    content: menuContent,
    home: '#',
    logoMark: logoMarkSvg,
    logoText: logoTextSvg,
    supportUrl: '#',
    supportText: 'Help & Support',
    keepOpenText: 'Keep Open',
    autoHideText: 'Auto-Hide',
    defaultMenuOpen: true,
    canAlwaysPin: false,
    onMenuToggle: fn(),
  },
} satisfies Meta<typeof MainMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
