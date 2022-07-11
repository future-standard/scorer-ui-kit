import React from 'react';
// import { MemoryRouter as Router } from 'react-router-dom'
import { MainMenu, Layout } from 'scorer-ui-kit';
import logoMarkSvg from '../assets/logo-mark.svg';
import logoTextSvg from '../assets/logo-text.svg';
import { text, object, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Global',
  component: MainMenu,
  decorators: [
    // RouterDecorator
  ]
};

export const _MainMenu = () => {

  const logoMark = text("Logo Mark SVG", logoMarkSvg);
  const logoText = text("Logo Text SVG", logoTextSvg);
  const canAlwaysPin = boolean("Can Always Pin", false);
  const keepOpenText = text("Keep Open", "Keep Open");
  const autoHideText = text("Auto-Hide", "Auto-Hide");

  const supportUrl = text("Support Url", "#");

  const menuHomeLink = text("Home Link", "#");
  const menuConfig = object("Menu Config", {
    items: [
      {
        icon: 'Invalid',
        title: 'Basic Item',
        href: '#'
      },
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
          {
            title: 'Child One',
            href: '/'
          },
          {
            title: 'Child Two',
            href: '#'
          },
          {
            title: 'Child Three',
            href: '#'
          },
          {
            title: 'Child with external link',
            href: 'https://www.google.com/',
            isExternalLink: true
          }
        ]
      },
      {
        icon: 'Success',
        title: 'Grouped Children',
        href: '#',
        submenu: [
          {
            title: 'Subheader'
          },
          {
            title: 'Nested Child One',
            href: '#'
          },
          {
            title: 'Nested Child Two',
            href: '#'
          },
          {
            title: 'Nested Child Three',
            href: '#'
          },
          {
            title: 'Subheader Two'
          },
          {
            title: 'Nested Child Four',
            href: '#'
          },
          {
            title: 'Nested Child Five',
            href: '#'
          }
        ]
      }
    ]
  });

  return (
    <Layout>
      <MainMenu content={menuConfig} home={menuHomeLink} {...{ logoMark, logoText, supportUrl, canAlwaysPin, keepOpenText, autoHideText }} />
    </Layout>
  );
};