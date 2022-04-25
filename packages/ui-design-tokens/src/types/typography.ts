export type Typography<TypographyValue> = {
  display: TypographyVariant<TypographyValue>;
  heading1: TypographyVariant<TypographyValue>;
  heading2: TypographyVariant<TypographyValue>;
  heading3: TypographyVariant<TypographyValue>;
  heading4: TypographyVariant<TypographyValue>;
  heading5: TypographyVariant<TypographyValue>;
  heading6: TypographyVariant<TypographyValue>;
  paragraph: TypographyVariant<TypographyValue>;
  textBold: TypographyVariant<TypographyValue>;
  textRegular: TypographyVariant<TypographyValue>;
};

type TypographyVariant<TypographyValue> = {
  xs: TypographyValue;
  sm?: TypographyValue;
  md?: TypographyValue;
  lg?: TypographyValue;
  xl?: TypographyValue;
};

export type TypographyValueInFigma = {
  type: string;
  value: TypographyValue;
};

export type TypographyValue = {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  paragraphSpacing: string;
  textDecoration: string;
  textCase: string;
};
