
// import React, { ThemeContext } from 'react';
// import { addParameters } from '@storybook/react'; // or any other type of storybook
// import { useDarkMode } from 'storybook-dark-mode';
// import { addDecorator } from '@storybook/react';

// import lightTheme from '../src/themes/light';
// import darkTheme from '../src/themes/dark';
// // import { withThemesProvider } from "storybook-addon-styled-component-theme";

// // your theme provider
// // import ThemeContext from './themes';
// // import {createContext} from 'react';
// // const ThemeContext = createContext("light");


// // addParameters({
// //   darkMode: {
// //     // Override the default dark theme
// //     dark: { ...themes.dark, appBg: 'black' },
// //     // Override the default light theme
// //     light: { ...themes.normal, appBg: 'red' }
// //   }
// // });


// // create a component that uses the dark mode hook
// function ThemeWrapper(props) {
//   // render your custom theme provider
//   return (
//     <ThemeContext.Provider value={useDarkMode() ? darkTheme : lightTheme}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// }

// addDecorator(renderStory => <ThemeWrapper>{renderStory()}</ThemeWrapper>);

import React from 'react';
import { addDecorator } from '@storybook/react';
import lightTheme from '../src/themes/light';
import darkTheme from '../src/themes/dark';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';

addDecorator(story => (
  <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
    {story()}
  </ThemeProvider>
));