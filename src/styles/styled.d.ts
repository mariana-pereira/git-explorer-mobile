import 'styled-components';

import { ThemeType } from './themes/light';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    title: string;

    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      card: string;
      background: string;
      textTitle: string;
      text: string;
      buttonText: string;
    };
    fonts: {
      regular: string;
      bold: string;
    };
  }
}
