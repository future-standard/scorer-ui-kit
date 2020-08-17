// import React from 'react';
// import styled from 'styled-components';
import { withKnobs} from "@storybook/addon-knobs";

// // import StoryRouter from 'storybook-react-router';

// import {MainMenu} from 'scorer-ui-kit';

// import logoMarkSvg from '../assets/logo-mark.svg';
// import logoTextSvg from '../assets/logo-text.svg';

// const Container = styled.div``;

export default {
  title: 'Global',
  component: ()=>null,
  decorators: [withKnobs]
};

// export const _MainMenu = () => {

//   const logoMark = text("Logo Mark SVG", logoMarkSvg);
//   const logoText = text("Logo Text SVG", logoTextSvg);

//   const menuHomeLink = text("Home Link", "#");
//   const menuConfig = object("Menu Config", {
//     items: [
//       {
//         icon: 'Invalid',
//         title: 'Basic Item',
//         href: '#'
//       },
//       {
//         icon: 'PasswordShow',
//         title: 'With Children',
//         href: '#',
//         submenu: [
//           {
//             title: 'Child One',
//             href: '#'
//           },
//           {
//             title: 'Child Two',
//             href: '#'
//           },
//           {
//             title: 'Child Three',
//             href: '#'
//           }
//         ]
//       },
//       {
//         icon: 'Success',
//         title: 'Grouped Children',
//         href: '#',
//         submenu: [
//           {
//             title: 'Subheader'
//           },
//           {
//             title: 'Nested Child One',
//             href: '#'
//           },
//           {
//             title: 'Nested Child Two',
//             href: '#'
//           },
//           {
//             title: 'Nested Child Three',
//             href: '#'
//           },
//           {
//             title: 'Subheader Two'
//           },
//           {
//             title: 'Nested Child Four',
//             href: '#'
//           },
//           {
//             title: 'Nested Child Five',
//             href: '#'
//           }
//         ]
//       }
//     ]
//   });

//   return <Container><MainMenu content={menuConfig} home={menuHomeLink} {...{logoMark, logoText}} /></Container>;
// };