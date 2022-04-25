import { Breakpoints } from './breakpoints';
import { Colors } from './colors';
import { FontFamilies } from './fontFamilies';
import { Typography } from './typography';

export type DesignTokens<DefaultValue, TypographyValue> = {
  global: Theme<DefaultValue, TypographyValue>;
};

type Theme<DefaultValue, TypographyValue> = {
  breakpoints: Breakpoints<DefaultValue>;
  colors: Colors<DefaultValue>;
  fontFamilies: FontFamilies<DefaultValue>;
  typography: Typography<TypographyValue>;
};
