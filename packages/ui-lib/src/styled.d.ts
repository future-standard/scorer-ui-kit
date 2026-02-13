import 'styled-components';

// Import the actual theme object to derive its type
import defaultTheme from './theme';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
